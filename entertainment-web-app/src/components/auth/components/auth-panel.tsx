'use client';

// Community
import React, { useRef, useState } from 'react';
import Link from 'next/link';

// Utils
import FormUtils from '@/utils/form-utils';
import StorageUtils from '@/utils/storage-utils';
import AuthUtils from '@/utils/auth-utils';

// Types
import { FormElementsTypes, FooterValuesTypes, FormSubmitTypes } from '@/types/input-types';
import { AuthFormValueType } from '@/types/auth-types';

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

        const { email = null, password = null }: any  = FormUtils.validateFormElements(formValues);

        console.log(password, email);

        if (!password || !email) {
            setFormValidationMessage('Password or Email are invalid. Please try again!');
        }


        // if (isValid) {
        //     const authStorage = StorageUtils.getStorageArray('auth');
        //
        //     AuthUtils.createAuthStorage(authStorage, {
        //         email: formValues.email,
        //         password: formValues.password,
        //     });
        // }
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
            </footer>
        </>
    );
};

export default AuthPanel;
