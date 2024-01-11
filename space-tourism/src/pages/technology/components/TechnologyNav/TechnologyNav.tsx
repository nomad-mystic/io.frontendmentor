// Community
import React, { ReactNode } from 'react';

// Styles
import './TechnologyNav.css';

// Components
import TechnologyNavItem from '../TechnologyNavItem/TechnologyNavItem';

// Types
import { ToggleEvent } from '../../types/TechnologyNavTypes';

// Data
import items from '../../data/NavItems.json';

/**
 * @description Switch the parent element by nav click
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @param {ToggleEvent} toggleActive
 * @return {React.JSX.Element}
 */
const TechnologyNav = ({ toggleActive }: ToggleEvent): React.JSX.Element => {
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
        <nav className="TechnologyNav-nav">
            <menu className="flex" onClick={ toggleActiveHandler }>
                {
                    items.map((item): ReactNode => {
                        return (
                            <TechnologyNavItem
                                number={ item.number }
                                id={ item.id }
                                className={ `${ item.className } TechnologyNavItem-navItem flex` }
                                key={ item.id }
                            />
                        )
                    })
                }
            </menu>
        </nav>
    );
};

export default TechnologyNav;
