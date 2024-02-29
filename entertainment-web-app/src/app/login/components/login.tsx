// Community
import React from 'react';

// Components
import AuthPanel from '@/components/auth/components/auth-panel';

// Types
import { formElementsTypes, formSubmitTypes, footerValuesTypes } from '@/types/input-types';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return React.JSX.Element
 */
const Login = () => {
    const formElements: Array<formElementsTypes> = [
        {
            elementType: 'input',
            type: 'email',
            id: 'email',
            placeholder: 'Email address',
            warning: {
                text: 'Can’t be empty',
            },
        },
        {
            elementType: 'input',
            type: 'password',
            id: 'password',
            placeholder: 'Password',
        },
    ];

    const formSubmit: formSubmitTypes = {
        type: 'submit',
        text: 'Login to your account',
    };

    const footerValues: footerValuesTypes = {
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
