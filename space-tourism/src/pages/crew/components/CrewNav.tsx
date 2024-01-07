import React from 'react';

// Types
import { ToggleEvent } from '../types/CrewNav';

const CrewNav = ({ toggleActive }: ToggleEvent) => {
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
        <nav className="CrewPage-nav">
            <menu className="flex gap-[36px]" onClick={ toggleActiveHandler }>
                <li className="CrewPage-navItem active" id="douglas"></li>
                <li className="CrewPage-navItem" id="mark"></li>
                <li className="CrewPage-navItem" id="victor"></li>
                <li className="CrewPage-navItem" id="anousheh"></li>
            </menu>
        </nav>
    );
};

export default CrewNav;
