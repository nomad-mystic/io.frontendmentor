import React from 'react';

// Styles
import './Header.css';

// Compontents
import HeaderNav from '../HeaderNav/HeaderNav';

/**
 * @description Build the header component
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const Header = (): React.JSX.Element => {
    return (
        <header className="Header max-w-container block md:flex justify-between items-center">
            <figure className="Header-logo">
                <img src="/shared/logo.svg"
                     alt="Circle with white background and dark star shape in the center" />
            </figure>

            <div className="Header-hamberger">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                    <rect width="24" height="3" fill="#D0D6F9" />
                    <rect y="9" width="24" height="3" fill="#D0D6F9" />
                    <rect y="18" width="24" height="3" fill="#D0D6F9" />
                </svg>
            </div>

            <HeaderNav />
        </header>
    );
};

export default Header;
