'use client';

// Community
import React, { useEffect, useState } from 'react';

// Styles
import '../../components/auth/auth.css';

// Components
import LoginComponent from '@/app/login/components/login';
import AuthHeader from '@/components/auth/components/auth-header';
import StorageUtils from '@/utils/storage-utils';

// Server Actions
import { redirectByPath } from '@/actions/redirect';

/**
 * @description Page for the Login form
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const Login = (): React.JSX.Element => {
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

            <LoginComponent />
        </section>
    );
};

export default Login;
