// Community
import React from 'react';

// Components
import AuthPanel from '@/components/auth/components/auth-panel';

// Types
import { FormElementsTypes, FormSubmitTypes, FooterValuesTypes } from '@/types/input-types';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return
 */
const Signup = () => {
    // Build our form
    const formElements: Array<FormElementsTypes> = [
        {
            elementType: 'input',
            type: 'email',
            id: 'email',
            placeholder: 'Email address',
            warning: {
                text: 'Can’t be empty',
            },
            required: true,
        },
        {
            elementType: 'input',
            type: 'password',
            id: 'password',
            placeholder: 'Password',
            warning: {
                text: 'Can’t be empty',
            },
            required: true,
        },
        {
            elementType: 'input',
            type: 'password',
            id: 'repeat-password',
            placeholder: 'Repeat password',
            warning: {
                text: 'Can’t be empty',
            },
            required: true,
        },
    ];

    const formSubmit: FormSubmitTypes = {
        type: 'submit',
        text: 'Create an account',
    };

    const footerValues: FooterValuesTypes = {
        text: 'Already have an account?',
        linkText: 'Login',
        url: '/login',
    };

    return (
        <main className="AuthMain">
            <section className="AuthSignup Auth-panel">
                <AuthPanel title="Login"
                           formElements={ formElements }
                           formSubmit={ formSubmit }
                           footerValues={ footerValues }
                />
            </section>
        </main>
    );
};

export default Signup;
