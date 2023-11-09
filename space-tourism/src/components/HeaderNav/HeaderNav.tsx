import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './HeaderNav.css';

const HeaderNav = (): React.JSX.Element => {
    return (
        <nav className="HeaderNav max-w-[830px] w-full">
            <ul className="flex gap-[50px]">
                <li className="NavText">
                    <NavLink to="/">
                        <span className="NavText-number">00 </span>
                        Home
                    </NavLink>
                </li>

                <li className="NavText">
                    <NavLink to="/destination">
                        <span className="NavText-number">01 </span>
                        Destination
                    </NavLink>
                </li>

                <li className="NavText">
                    <NavLink to="/crew">
                        <span className="NavText-number">02 </span>
                        Crew
                    </NavLink>
                </li>

                <li className="NavText">
                    <NavLink to="/technology">
                        <span className="NavText-number">03 </span>
                        Technology
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNav;
