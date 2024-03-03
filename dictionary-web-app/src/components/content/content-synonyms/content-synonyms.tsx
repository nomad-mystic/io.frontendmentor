import React from 'react';

import { MeaningType } from '@/types/meaning-type';

const ContentSynonyms = (props: {meaning: MeaningType}) => {
    console.log(props.meaning.synonyms);

    return (
        <div className="flex gap-x-4">
            <h3>Synonyms</h3>
            <p>{ props.meaning.synonyms }</p>
        </div>
    );
};

export default ContentSynonyms;