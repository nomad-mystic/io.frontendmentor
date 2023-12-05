import React from 'react';

import TechnologyDataInterface from '../interfaces/TechnologyDataInterface';

const TechnologyContent = (props: { data: TechnologyDataInterface }): React.JSX.Element => {
    // console.log(props);

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
