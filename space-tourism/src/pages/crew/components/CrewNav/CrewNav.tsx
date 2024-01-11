import React from 'react';

// Styles
import './CrewNav.css';

// Types
import { ToggleEvent } from '../../types/CrewNav';

/**
 * @description Dumb component for displaying our Crew page images
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @param {ToggleEvent} toggleActive
 * @return {React.JSX.Element}
 */
const CrewNav = ({ toggleActive }: ToggleEvent): React.JSX.Element => {
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
        <nav className="CrewNav-nav">
            <menu className="flex gap-[36px]" onClick={ toggleActiveHandler }>
                <li className="CrewNav-navItem active" id="douglas"></li>
                <li className="CrewNav-navItem" id="mark"></li>
                <li className="CrewNav-navItem" id="victor"></li>
                <li className="CrewNav-navItem" id="anousheh"></li>
            </menu>
        </nav>
    );
};

export default CrewNav;
