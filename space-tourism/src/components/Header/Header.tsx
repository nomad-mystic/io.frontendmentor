import React from 'react';

// Styles
import './Header.css';

// Compontents
import HeaderNav from '../HeaderNav/HeaderNav';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const Header = (): React.JSX.Element => {
    return (
        <header className="Header max-w-container flex justify-between items-center">
            <figure className="Header-logo">
                <img src="/shared/logo.svg"
                     alt="Circle with white background and dark star shape in the center"/>
            </figure>

            <HeaderNav/>
        </header>
    );
};

export default Header;
