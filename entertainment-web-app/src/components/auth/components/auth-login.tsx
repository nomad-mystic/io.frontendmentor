'use client';

// Community
import React, { PropsWithChildren } from 'react';

// Types
import { AuthStates } from '@/types/auth-types';

// Components
import AuthPanel from '@/components/auth/components/auth-panel';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return React.JSX.Element
 */
const AuthLogin = (props: PropsWithChildren<AuthStates>) => {

    console.log(props.handlePanelStates);

    return (
        <main className="AuthMain">
            <section className="AuthLogin Auth-panel">
                <AuthPanel />
            </section>
        </main>
    );
};

export default AuthLogin;
