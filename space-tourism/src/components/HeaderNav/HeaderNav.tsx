import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './HeaderNav.css';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const HeaderNav = (): React.JSX.Element => {
    return (
        <nav className="HeaderNav max-w-[830px] w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 21" fill="none" className="HeaderNav-close">
                <rect x="2.5752" y="0.954102" width="24" height="3" transform="rotate(45 2.5752 0.954102)"
                      fill="#D0D6F9" />
                <rect x="0.454102" y="17.9246" width="24" height="3" transform="rotate(-45 0.454102 17.9246)"
                      fill="#D0D6F9" />
            </svg>

            <ul className="flex flex-col  md:flex-row md:gap-[50px]">
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
