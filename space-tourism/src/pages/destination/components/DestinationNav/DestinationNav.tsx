// Community
import React from 'react';

// Styles
import './DestinationNav.css';

// Types
import { ToggleEventType } from '../../../../types/NavTypes';

/**
 * @description Switch the parent element by nav click
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @param {ToggleEvent} toggleActive
 * @return {React.JSX.Element}
 */
const DestinationNav = ({ toggleActive }: ToggleEventType): React.JSX.Element => {
    /**
     * @description Pass our event to the parent component
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    const toggleActiveHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        toggleActive(event);
    };

    return (
        <nav className="DestinationNav-nav">
            <menu className="flex gap-[36px]" onClick={ toggleActiveHandler }>
                <li className="DestinationNav-navItem NavText active" id="moon">MOON</li>
                <li className="DestinationNav-navItem NavText" id="mars">MARS</li>
                <li className="DestinationNav-navItem NavText" id="europa">EUROPA</li>
                <li className="DestinationNav-navItem NavText" id="titan">TITAN</li>
            </menu>
        </nav>
    );
};

export default DestinationNav;
