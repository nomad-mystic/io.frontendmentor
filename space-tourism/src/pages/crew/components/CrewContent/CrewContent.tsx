// Community
import React from 'react';

// Styles
import './CrewContent.css';

// Interfaces
import CrewDataInterface from '../../interfaces/CrewDataInterface';

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
        <article className="CrewContent-content" data-testid="CrewContentComponent">
            <h2 className="CrewContent-title Heading-4" data-testid="CrewContentComponent-title">{ props.data.title }</h2>
            <h1 className="CrewContent-name Heading-3" data-testid="CrewContentComponent-name">{ props.data.name }</h1>
            <p className="CrewContent-body Body block" data-testid="CrewContentComponent-body">{ props.data.body }</p>
        </article>
    );
};

export default CrewContent;
