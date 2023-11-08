import React from 'react';

// Styles
import './Header.css';

// Compontents
import HeaderNav from '../HeaderNav/HeaderNav';

const Header = (): React.JSX.Element => {
    return (
        <header className="Header">
            <HeaderNav />
        </header>
    );
};

export default Header;
