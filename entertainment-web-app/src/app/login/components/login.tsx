// Community
import React from 'react';

// Components
import AuthPanel from '@/components/auth/components/auth-panel';

// Types
import { FormElementsTypes, FormSubmitTypes, FooterValuesTypes } from '@/types/input-types';

/**
 * @description Component for the Login form
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const Login = (): React.JSX.Element => {
    // Build our form inputs
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
            required: true,
        },
    ];

    // Build our form submit button
    const formSubmit: FormSubmitTypes = {
        type: 'submit',
        text: 'Login to your account',
    };

    // Build our form footer values
    const footerValues: FooterValuesTypes = {
        text: 'Don’t have an account?',
        linkText: 'Sign Up',
        url: '/signup',
    };

    return (
        <main className="AuthMain">
            <section className="AuthLogin Auth-panel">
                <AuthPanel title="Login"
                           formElements={ formElements }
                           formSubmit={ formSubmit }
                           footerValues={ footerValues }
                />
            </section>
        </main>
    );
};

export default Login;
