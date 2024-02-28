'use client';

// Community
import React, { PropsWithChildren } from 'react';

// Components
import AuthPanel from '@/components/auth/components/auth-panel';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return React.JSX.Element
 */
const Login = () => {
    return (
        <main className="AuthMain">
            <section className="AuthLogin Auth-panel">
                <AuthPanel />
            </section>
        </main>
    );
};

export default Login;
