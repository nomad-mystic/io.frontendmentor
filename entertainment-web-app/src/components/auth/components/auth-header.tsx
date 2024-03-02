// Community
import React from 'react';
import Image from 'next/image';

/**
 * @description Builds the auth header component
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const AuthHeader = (): React.JSX.Element => {
    return (
        <header className="Auth-header">
            <Image
                src="/assets/logo.svg"
                alt="Red image of a movie reel"
                width={ 32 }
                height={ 25 }
            />
        </header>
    );
};

export default AuthHeader;
