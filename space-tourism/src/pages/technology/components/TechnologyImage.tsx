import React from 'react';

// Interfaces
import TechnologyDataInterface from '../interfaces/TechnologyDataInterface';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const TechnologyImage = (props: { data: TechnologyDataInterface }): React.JSX.Element => {
    return (
        <figure className="TechnologyPage-image">
            <img src={ props.data.image } alt={ props.data.imageAlt }/>
        </figure>
    );
};

export default TechnologyImage;
