import React from 'react';
import CrewDataInterface from '../interfaces/CrewDataInterface';


const CrewContent = (props: { data: CrewDataInterface }): React.JSX.Element => {
    return (
        <article className="CrewPage-content">
            <h2 className="CrewPage-title Heading-4">{ props.data.title }</h2>
            <h1 className="CrewPage-name Heading-3">{ props.data.name }</h1>
            <p className="CrewPage-text Subheading-2 max-w-[444px] block">{ props.data.body }</p>
        </article>
    );
};

export default CrewContent;
