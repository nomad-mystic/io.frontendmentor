import React from 'react';

// Styles
import './TechnologyImage.css';

// Interfaces
import TechnologyDataInterface from '../../interfaces/TechnologyDataInterface.ts';

/**
 * @description Based on the props passed to this change the image
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @param {object} props
 * @param {TechnologyDataInterface} props.data
 * @return {React.JSX.Element}
 */
const TechnologyImage = (props: { data: TechnologyDataInterface }): React.JSX.Element => {
    return (
        <figure className="TechnologyImage-figure">
            <img className="TechnologyImage-image" src={ props.data.image } alt={ props.data.imageAlt }/>
        </figure>
    );
};

export default TechnologyImage;
