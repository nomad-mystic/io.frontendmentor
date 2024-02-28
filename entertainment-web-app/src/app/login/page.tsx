'use client';

// Community
import React, { useEffect, useState } from 'react';

// Styles
import '../../components/auth/auth.css';

// Components
import LoginComponent from '@/app/login/components/login';
import AuthHeader from '@/components/auth/components/auth-header';
import StorageUtils from '@/utils/storage-utils';
import { redirect } from 'next/navigation';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const Login = (): React.JSX.Element => {

    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        const authStorage = StorageUtils.getStorageArray('auth');

        // Check initial state
        if (authStorage && typeof authStorage !== 'undefined' && authStorage.length > 0) {
            redirect('/home');
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
