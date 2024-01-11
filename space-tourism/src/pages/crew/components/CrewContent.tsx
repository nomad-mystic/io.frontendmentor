// Community
import React from 'react';

// Interfaces
import CrewDataInterface from '../interfaces/CrewDataInterface';

/**
 * @description Dumb component for displaying our Crew page body content
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @param {object} props
 * @param {CrewDataInterface} props.data
 * @return {React.JSX.Element}
 */
const CrewContent = (props: { data: CrewDataInterface }): React.JSX.Element => {
    return (
        <article className="CrewPage-content">
            <h2 className="CrewPage-title Heading-4">{ props.data.title }</h2>
            <h1 className="CrewPage-name Heading-3">{ props.data.name }</h1>
            <p className="CrewPage-body Body max-w-[444px] block">{ props.data.body }</p>
        </article>
    );
};

export default CrewContent;
