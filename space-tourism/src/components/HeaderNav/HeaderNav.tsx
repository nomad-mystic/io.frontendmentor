// Community
import React, { RefObject, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Styles
import './HeaderNav.css';

// Types
import { NavigationType } from '../../store/slices/navigation/navigation-types';
import { navigationAction } from '../../store/slices/navigation/navigation-slice.ts';

/**
 * @description Builds the header navigation elements and state
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const HeaderNav = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const headerNavRef = useRef(null);
    const navigation = useSelector((state: NavigationType) => state.navigation.isOpen);

    /**
     * @description Toggle the navigation state (Mobile only)
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {React.MouseEvent} event
     * @return {void}
     */
    const toggleNavigation = (event: React.MouseEvent): void => {
        const target = event.target as HTMLElement;

        if (target && typeof target !== 'undefined' && target.tagName === 'svg' || target.tagName === 'rect') {
            dispatch(navigationAction.toggleNavigation());
        }
    };

    // Set our state
    const isOpen = navigation ? 'HeaderNav-isOpen' : '';

    /**
     * @description Set the nav's height (Mobile only)
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {RefObject<HTMLElement>} current
     * @return {void}
     */
    const updateNavHeight = ({ current }: RefObject<HTMLElement>): void => {
        const nav = current as HTMLElement;

        const bodyElement = window.document.body;

        nav.style.setProperty('--mobile-nav-height', `${ bodyElement.getBoundingClientRect().height }px`);
    };

    useEffect(() => {

        updateNavHeight(headerNavRef);

    }, [navigation])

    return (
        <nav className={ `HeaderNav max-w-[830px] w-full ${ isOpen }` } ref={ headerNavRef }>

            <div onClick={ toggleNavigation }>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 21" fill="none"
                     className="HeaderNav-close">
                    <rect x="2.5752" y="0.954102" width="24" height="3" transform="rotate(45 2.5752 0.954102)"
                          fill="#D0D6F9" />
                    <rect x="0.454102" y="17.9246" width="24" height="3" transform="rotate(-45 0.454102 17.9246)"
                          fill="#D0D6F9" />
                </svg>
            </div>

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
