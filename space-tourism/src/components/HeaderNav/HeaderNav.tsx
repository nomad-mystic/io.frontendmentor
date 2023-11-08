import React from 'react';

// Styles
import './HeaderNav.css';

const HeaderNav = (): React.JSX.Element => {
    return (
        <nav className="HeaderNav">
            <ul className="flex">
                <li className="NavText">00 Home</li>
                <li className="NavText">01 Destination</li>
                <li className="NavText">02 Crew</li>
                <li className="NavText">03 Technology</li>
            </ul>
        </nav>
    );
};

export default HeaderNav;
