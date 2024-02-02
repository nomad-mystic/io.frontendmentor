'use client'

// Community
import React, { RefObject, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Styles
import './auth.css';
import Link from 'next/link';
import FormUtils from '@/utils/form-utils';
import StorageUtils from '@/utils/storage-utils';
import AuthUtils from '@/utils/auth-utils';
import { type } from 'node:os';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return React.JSX.Element
 */
const AuthPage = (): React.JSX.Element => {
    const emailElement = useRef<HTMLInputElement>(null);
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);

    const passwordElement = useRef<HTMLInputElement>(null);
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

    // Get our refs
    const authElement = useRef<HTMLDivElement>(null);
    const currentAuthElement = authElement.current;

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

        const currentEmail = emailElement.current;
        const currentPassword = passwordElement.current;

        if (!FormUtils.validateFormElements(currentEmail)) {
            setIsEmailInvalid(true);
        }

        if (!FormUtils.validateFormElements(currentPassword)) {
            setIsPasswordInvalid(true);
        }

        const authStorage = StorageUtils.getStorageArray('auth');

        // Add our user to the auth storage
        // They are not signed or don't have an account
        AuthUtils.createAuthStorage(authStorage, {
            currentEmail,
            currentPassword,
        });

        AuthUtils.setVisualStateAfterLogin(authStorage, {
            currentEmail,
            currentPassword,
            currentAuthElement,
        });
    };

    useEffect(() => {
        const authStorage = StorageUtils.getStorageArray('auth');

        // Check initial state
        if (authStorage && typeof authStorage !== 'undefined' && authStorage.length > 0) {
            AuthUtils.setVisualStates(currentAuthElement);
        }

    }, []);

    return (
        <section className="Auth" ref={ authElement }>
            <header className="Auth-header">
                <Image
                    src="/assets/logo.svg"
                    alt="Red image of a movie reel"
                    width={ 32 }
                    height={ 25 }
                />
            </header>

            <main className="AuthMain">
                <section className="AuthLogin Auth-panel">
                    <h2 className="AuthTitle header-l">Login</h2>

                    <form onSubmit={ handleSubmit }>
                        <label>
                            <input type="email" id="email" placeholder="Email address" ref={ emailElement } />
                            <span
                                className={ `body-s text-red ${ isEmailInvalid ? 'invalid' : '' }` }>Can’t be empty</span>
                        </label>

                        <label>
                            <input type="password" id="password" placeholder="Password" ref={ passwordElement } />
                            <span
                                className={ `body-s text-red ${ isPasswordInvalid ? 'invalid' : '' }` }>Can’t be empty</span>
                        </label>

                        <button className={ `body-m button` } type="submit">Login to your account</button>
                    </form>

                    <footer>
                        <p className="body-m">Don’t have an account?
                            <Link href="/signup" className="text-red">Sign Up</Link>
                        </p>
                    </footer>
                </section>
            </main>
        </section>
    );
};


export default AuthPage;
