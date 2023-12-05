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
const TechnologyContent = (props: { data: TechnologyDataInterface }): React.JSX.Element => {
    return (
        <section>
            <article>
                <header>
                    <h2 className="text-white">{ props.data.subtitle }</h2>
                    <h1 className="Heading-3">{ props.data.title }</h1>
                </header>

                <p className="DestinationPage-text Subheading-2 max-w-[444px] block">{ props.data.body }</p>
            </article>
        </section>
    );
};

export default TechnologyContent;
