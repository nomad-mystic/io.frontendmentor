import React from 'react';

// Compontents
import HeaderNav from '../HeaderNav/HeaderNav.tsx';

const Header = (): React.JSX.Element => {
    return (
        <header className="Header">

            <HeaderNav />
        </header>
    );
};

export default Header;
