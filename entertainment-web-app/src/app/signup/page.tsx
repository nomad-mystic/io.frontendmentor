// Community
import React from 'react';

// Styles
import '../../components/auth/auth.css';

// Components
import AuthHeader from '@/components/auth/components/auth-header';
import SignUpComponent from '@/app/signup/components/signup';

/**
 * @description 
 * @public 
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return 
 */
const SignUp = () => {
    return (
        <section className="Auth">
            <AuthHeader />

            <SignUpComponent />
        </section>
    );
};

export default SignUp;
