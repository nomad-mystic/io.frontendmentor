import React from 'react';

// Styles
import './TechnologyContent.css';

// Interfaces
import TechnologyDataInterface from '../../interfaces/TechnologyDataInterface';

/**
 * @description Based on the props passed to this change the content
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @param {object} props
 * @param {TechnologyDataInterface} props.data
 * @return {React.JSX.Element}
 */
const TechnologyContent = (props: { data: TechnologyDataInterface }): React.JSX.Element => {
    return (
        <>
            <article>
                <header>
                    <h2 className="TechnologyContent-subtitle text-white">{ props.data.subtitle }</h2>
                    <h1 className="TechnologyContent-title Heading-3">{ props.data.title }</h1>
                </header>

                <p className="TechnologyContent-body Subheading-2 max-w-[444px] block">{ props.data.body }</p>
            </article>
        </>
    );
};

export default TechnologyContent;
