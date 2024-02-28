import React from 'react';
import Image from 'next/image';

const AuthHeader = () => {
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
