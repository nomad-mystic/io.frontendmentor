'use client';

// Community
import React, { useRef, useState } from 'react';
import Link from 'next/link';

// Utils
import FormUtils from '@/utils/form-utils';
import StorageUtils from '@/utils/storage-utils';
import AuthUtils from '@/utils/auth-utils';

// Types
import { formElementsTypes, footerValuesTypes, formSubmitTypes } from '@/types/input-types';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return React.JSX.Element
 */
const AuthPanel = (props: {
    formElements: Array<formElementsTypes>,
    formSubmit: formSubmitTypes,
    footerValues: footerValuesTypes,
    title: string,
}) => {
    const [formValues, setFormValues] = useState({});
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

        // Local State
        let localInValid: string[] = [];

        // Event delegation
        const target = event.target as HTMLFormElement;

        console.log(target);

        if (!target || typeof target === 'undefined' || target.tagName !== 'FORM') {
            return;
        }

        const current = formElement.current as HTMLFormElement | undefined;

        const formData = new FormData(current);
        // output as an object
        console.log(Object.fromEntries(Object.entries(formData)));

        // for (const input in formValues) {
        //     if (Object.hasOwn(formValues, input)) {
        //         // @ts-ignore
        //         const value = formValues[input];
        //
        //         console.log(`${input}: ${value}`);
        //
        //         let isValid = FormUtils.validateFormElements(value);
        //
        //         if (!isValid) {
        //             localInValid.push(input);
        //         }
        //
        //         console.log(isValid);
        //     }
        // }
        //
        // console.log(localInValid);

        if (localInValid.length <= 0) {
            // const authStorage = StorageUtils.getStorageArray('auth');
            //
            // // Add our user to the auth storage
            // // They are not signed or don't have an account
            // AuthUtils.createAuthStorage(authStorage, {
            //     currentEmail,
            //     currentPassword,
            // });
        }

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
