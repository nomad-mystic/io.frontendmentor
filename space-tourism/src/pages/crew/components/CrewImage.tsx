import React from 'react';


import CrewDataInterface from '../interfaces/CrewDataInterface';

const CrewImage = (props: { data: CrewDataInterface }): React.JSX.Element => {
    return (
        <figure>
            <img src={ props.data.image } alt={ props.data.imageAlt }/>
        </figure>
    );
};

export default CrewImage;
