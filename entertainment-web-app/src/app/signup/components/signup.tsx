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
 * @return
 */
const Signup = () => {
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
            warning: {
                text: 'Can’t be empty',
            },
        },
        {
            elementType: 'input',
            type: 'password',
            id: 'repeat-password',
            placeholder: 'Repeat password',
            warning: {
                text: 'Can’t be empty',
            },
        },
    ];

    const formSubmit: formSubmitTypes = {
        type: 'submit',
        text: 'Create an account',
    };

    const footerValues: footerValuesTypes = {
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
