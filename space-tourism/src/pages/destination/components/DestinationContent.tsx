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
const DestinationContent = (props: { data: DestinationDataInterface }): React.JSX.Element => {
    return (
        <section id={ props.data.id }>
            <article>
                <header>
                    <h1 className="Heading-2">{ props.data.title }</h1>
                </header>

                <p className="DestinationPage-text Subheading-2 max-w-[444px] block">{ props.data.body }</p>

                <section className="DestinationPage-data flex">
                    <div className="DestinationPage-distance">
                        <h4>AVG. DISTANCE</h4>
                        <p className="Subheading-1">{ props.data.distance }</p>
                    </div>
                    <div className="DestinationPage-travel">
                        <h4>Est. travel time</h4>
                        <p className="Subheading-1">{ props.data.time }</p>
                    </div>
                </section>
            </article>
        </section>
    );
};

export default DestinationContent;
