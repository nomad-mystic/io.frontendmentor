'use client';

// Community
import React, { useEffect } from 'react';

// Styles
import '../../components/auth/auth.css';

// Components
import AuthHeader from '@/components/auth/components/auth-header';
import SignUpComponent from '@/app/signup/components/signup';
import StorageUtils from '@/utils/storage-utils';

// Server Actions
import { redirectByPath } from '@/actions/redirect';

/**
 * @description Page for the Sign-up form
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const SignUp = (): React.JSX.Element => {
    useEffect(() => {
        const authStorage = StorageUtils.getStorageArray('auth');

        // Check initial state
        if (authStorage && typeof authStorage !== 'undefined' && authStorage.length > 0) {
            // If there is a storage item redirect to homepage
            redirectByPath('/home').catch(() => {});
        }
    }, []);

    return (
        <section className="Auth">
            <AuthHeader />

            <SignUpComponent />
        </section>
    );
};

export default SignUp;
