// Community
import React from 'react';

// Styles
import './DestinationImage.css';

// Interfaces
import DestinationDataInterface from '../../interfaces/DestinationDataInterface';

/**
 * @description Based on the props passed to this change the image type
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @param {object} props
 * @param {DestinationDataInterface} props.data
 * @return {React.JSX.Element}
 */
const DestinationImage = (props: { data: DestinationDataInterface }): React.JSX.Element => {
    return (
        <figure className="DestinationImage-figure">
            <img className="DestinationImage-image" src={ props.data.image } alt={ props.data.imageAlt }/>
        </figure>
    );
};

export default DestinationImage;
