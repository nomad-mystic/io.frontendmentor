// Community
import React from 'react';

// Styles
import './CrewImage.css';

// Interfaces
import CrewDataInterface from '../../interfaces/CrewDataInterface';

/**
 * @description Dumb component for displaying our Crew page images
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @param {object} props
 * @param {CrewDataInterface} props.data
 * @return {React.JSX.Element}
 */
const CrewImage = (props: { data: CrewDataInterface }): React.JSX.Element => {
    return (
        <figure className="CrewImage-figure">
            <img className="CrewImage-img" src={ props.data.image } alt={ props.data.imageAlt } />
        </figure>
    );
};

export default CrewImage;
