'use client';

// Community
import React, { BaseSyntheticEvent, useRef, useState } from 'react';
import Link from 'next/link';

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
 * @return {React.JSX.Element}
 */
const AuthPanel = (props: {
    formElements: Array<FormElementsTypes>,
    formSubmit: FormSubmitTypes,
    footerValues: FooterValuesTypes,
    title: string,
}): React.JSX.Element => {
    // States
    const [formValues, setFormValues] = useState({});
    const [formValidationMessage, setFormValidationMessage] = useState('');

    /**
     * @description Handle the Form submission
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
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

    /**
     * @description Bases on the input used show or hide warning
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    const handleWarning = <T extends BaseSyntheticEvent>(event: T): void => {
        const target = event.target;

        if (target && typeof target !== 'undefined') {
            if (target.value === '') {

                event.target.classList.add('isInvalid');

            } else {
                event.target.classList.remove('isInvalid');
            }
        }
    };

    /**
     * @description Update our input's state and show or hide warning
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>, element: FormElementsTypes): void => {
        handleWarning(event);

        setFormValues((prevState) => {
            return {
                ...prevState,
                [`${ element.id }`]: event.target.value,
            }
        })
    };

    /**
     * @description Show or hide warning message
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    const onFocusHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
        handleWarning(event);
    };

    /**
     * @description Show or hide warning message
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
        handleWarning(event);
    };

    return (
        <>
            <h2 className="Auth-title header-l">{ props.title }</h2>

            <form onSubmit={ handleSubmit } >
                {
                    props.formElements.map((element) => {
                        return (
                            <label key={ element?.id } htmlFor={ element?.id }>
                                <input type={ element?.type }
                                       id={ element?.id }
                                       placeholder={ element?.placeholder }
                                       onChange={ (e) => {
                                           onChangeHandler(e, element);
                                       } }
                                       required={ element.required ?? false }
                                       onFocus={ (e) => onFocusHandler(e) }
                                       onBlur={ (e) => onBlurHandler(e) }
                                       className={``}
                                />

                                <span className="Auth-warning body-s text-red">
                                    { element.warning?.text }
                                </span>
                            </label>
                        );
                    })
                }

                {
                    <button className={ `body-m button` }
                            type={ props.formSubmit.type }
                    >
                        { props.formSubmit.text }
                    </button>
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
