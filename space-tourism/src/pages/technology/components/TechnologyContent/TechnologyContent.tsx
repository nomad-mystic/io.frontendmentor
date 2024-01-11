// Community
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
            <article className="TechnologyContent-body flex">
                <header className="TechnologyContent-header">
                    <h2 className="TechnologyContent-subtitle text-white normal-text">{ props.data.subtitle }</h2>
                    <h1 className="TechnologyContent-name Heading-3 normal-text">{ props.data.name }</h1>
                </header>

                <p className="TechnologyContent-body Body max-w-[444px] block normal-text">{ props.data.body }</p>
            </article>
        </>
    );
};

export default TechnologyContent;
