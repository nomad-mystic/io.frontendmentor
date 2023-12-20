// Community
import React from 'react';
import { useDispatch } from 'react-redux';

// Styles
import './Header.css';

// Compontents
import HeaderNav from '../HeaderNav/HeaderNav';

// Actions
import { navigationAction } from '../../store/slices/navigation/navigation-slice';


/**
 * @description Build the header component
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const Header = (): React.JSX.Element => {
    const dispatch = useDispatch();

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

    return (
        <header className="Header max-w-container block md:flex justify-between items-center">
            <figure className="Header-logo">
                <img src="/shared/logo.svg"
                     alt="Circle with white background and dark star shape in the center" />
            </figure>

            <div className="Header-hamberger" onClick={ toggleNavigation }>
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
