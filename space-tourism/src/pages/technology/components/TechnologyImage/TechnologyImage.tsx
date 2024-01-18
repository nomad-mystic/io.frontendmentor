// Community
import React from 'react';

// Styles
import './TechnologyImage.css';

// Interfaces
import TechnologyDataInterface from '../../interfaces/TechnologyDataInterface';

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
        <>
            <div className="TechnologyImage-backgroundImage TechnologyImage-backgroundImage--mobile" style={ {
                backgroundImage: `url(${ props.data.mobileImage })`,
            } } data-testid="TechnologyImageComponent-mobile"></div>

            <div className="TechnologyImage-backgroundImage TechnologyImage-backgroundImage--desktop" style={ {
                backgroundImage: `url(${ props.data.desktopImage })`,
            } } data-testid="TechnologyImageComponent-desktop"></div>
        </>
    );
};

export default TechnologyImage;
