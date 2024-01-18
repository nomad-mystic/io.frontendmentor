import React from 'react';

// Styles
import './CrewNav.css';

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
const CrewNav = ({ toggleActive }: ToggleEventType): React.JSX.Element => {
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
        <nav className="CrewNav-nav" data-testid="CrewNavComponent">
            <menu className="flex" onClick={ toggleActiveHandler }>
                <li className="CrewNav-navItem active" id="douglas" data-testid="CrewNav-navItem--douglas"></li>
                <li className="CrewNav-navItem" id="mark" data-testid="CrewNav-navItem--mark"></li>
                <li className="CrewNav-navItem" id="victor" data-testid="CrewNav-navItem--victor"></li>
                <li className="CrewNav-navItem" id="anousheh" data-testid="CrewNav-navItem--anousheh"></li>
            </menu>
        </nav>
    );
};

export default CrewNav;
