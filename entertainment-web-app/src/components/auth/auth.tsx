'use client'

// Community
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Styles
import './auth.css';

// Utils
import StorageUtils from '@/utils/storage-utils';
import AuthUtils from '@/utils/auth-utils';

// Components
import AuthLogin from '@/components/auth/components/auth-login';
import AuthSignup from '@/components/auth/components/auth-signup';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return React.JSX.Element
 */
const AuthPage = (): React.JSX.Element => {
    const [isLogin, setIsLogin] = useState(true);


    useEffect(() => {
        const authStorage = StorageUtils.getStorageArray('auth');

        // Check initial state
        if (authStorage && typeof authStorage !== 'undefined' && authStorage.length > 0) {
            AuthUtils.setVisualStates();
        }

    }, []);

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return
     */
    const handlePanelStates = () => {

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
            {/*{*/}
            {/*    isLogin && <AuthLogin handlePanelStates={ handlePanelStates } />*/}
            {/*}*/}

            {/*{*/}
            {/*    !isLogin && <AuthSignup handlePanelStates={ handlePanelStates } />*/}
            {/*}*/}
        </section>
    );
};


export default AuthPage;
