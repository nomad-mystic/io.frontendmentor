'use client';

// Community
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

// Utils
import FormUtils from '@/utils/form-utils';
import StorageUtils from '@/utils/storage-utils';
import AuthUtils from '@/utils/auth-utils';

// Types
import { FormElementsTypes, FooterValuesTypes, FormSubmitTypes } from '@/types/input-types';

// Server Actions
import { redirectByPath } from '@/actions/redirect';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return React.JSX.Element
 */
const AuthPanel = (props: {
    formElements: Array<FormElementsTypes>,
    formSubmit: FormSubmitTypes,
    footerValues: FooterValuesTypes,
    title: string,
}) => {
    const [formValues, setFormValues] = useState({});
    const [formValidationMessage, setFormValidationMessage] = useState('');
    const formElement = useRef<HTMLFormElement>(null);

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return
     */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Stop the form submitting
        event.preventDefault();

        // Event delegation
        const target = event.target as HTMLFormElement;

        if (!target || typeof target === 'undefined' || target.tagName !== 'FORM') {
            setFormValidationMessage('There was an issue with submitting the form. Please try again!');
        }

        // Extract our values after validation
        const { email = null, password = null }: any = FormUtils.validateFormElements(formValues);

        if (!password || !email) {
            setFormValidationMessage('Password or Email are invalid. Please try again!');
        }

        // Get and set our storage item
        const authStorage = StorageUtils.getStorageArray('auth');

        AuthUtils.createAuthStorage(authStorage, {
            email: email,
            password: btoa(password),
        });

        // After our validation redirect to homepage
        redirectByPath('/home').catch(() => setFormValidationMessage('There was an issue with redirecting!'));
    };

    return (
        <>
            <h2 className="AuthTitle header-l">{ props.title }</h2>

            <form onSubmit={ handleSubmit } ref={ formElement }>
                {
                    props.formElements.map((element) => {
                        return (
                            <label key={ element?.id }>
                                <input type={ element?.type }
                                       id={ element?.id }
                                       placeholder={ element?.placeholder }
                                       onChange={ (e) => {
                                           setFormValues((prevState) => {
                                               return {
                                                   ...prevState,
                                                   [`${ element.id }`]: e.target.value,
                                               }
                                           })
                                       } }
                                       required={ element.required ?? false }
                                />
                                <span className={ `body-s text-red isValid` }>{ element.warning?.text }</span>
                            </label>
                        );
                    })
                }

                {
                    <button className={ `body-m button` }
                            type={ props.formSubmit.type }>{ props.formSubmit.text }</button>
                }
            </form>

            <footer>
                <p className="body-m">{ props.footerValues.text }
                    <Link href={ props.footerValues.url }
                          className="text-red">{ props.footerValues.linkText }</Link>
                </p>
                <span className="text-red">{ formValidationMessage }</span>
            </footer>
        </>
    );
};

export default AuthPanel;
