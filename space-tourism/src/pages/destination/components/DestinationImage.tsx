import React from 'react';

// Interfaces
import DestinationDataInterface from '../interfaces/DestinationDataInterface';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const DestinationImage = (props: { data: DestinationDataInterface }): React.JSX.Element => {
    return (
        <figure className="DestinationPage-image" id={ props.data.id }>
            <img src={ props.data.image } alt={ props.data.imageAlt }/>
        </figure>
    );
};

export default DestinationImage;
