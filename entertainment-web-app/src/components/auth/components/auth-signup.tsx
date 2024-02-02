// Community
import React, { PropsWithChildren } from 'react';

// Types
import { AuthStates } from '@/types/auth-types';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return
 */
const AuthSignup = (props: PropsWithChildren<AuthStates>) => {
    return (
        <main className="AuthMain">
            <section className="AuthSignup Auth-panel">
                Testing
            </section>
        </main>
    );
};

export default AuthSignup;
