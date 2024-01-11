// Community
import React from 'react';

// Styles
import './TechnologyNavItem.css';

// Types
import { TechnologyNavItemType } from '../../types/TechnologyNavItemTypes';

/**
 * @description Build our nav items
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @param {React.PropsWithChildren<TechnologyNavItemType>} props
 * @return {React.JSX.Element}
 */
const TechnologyNavItem = (props: React.PropsWithChildren<TechnologyNavItemType>): React.JSX.Element => {
    return (
        <li className={ `${props.className} normal-text` } id={ props.id.toString() }>
            <span className="TechnologyNavItem-navNumber">{ props.number }</span>
            <span className="TechnologyNavItem-navShape"></span>
        </li>
    );
};

export default TechnologyNavItem;
