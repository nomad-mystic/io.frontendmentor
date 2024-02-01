'use client'

// Community
import React, { RefObject, useRef, useState } from 'react';
import Image from 'next/image';

// Styles
import './auth.css';
import Link from 'next/link';
import FormUtils from '@/utils/form-utils';

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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        // console.log(event);
        // console.log(emailElement);
        // console.log(passwordElement);

        if (!FormUtils.validateFormElements(emailElement.current)) {
            setIsEmailInvalid(true);
        }

        if (!FormUtils.validateFormElements(passwordElement.current)) {
            setIsPasswordInvalid(true);
        }
    };

    return (
        <section className="Auth">
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
