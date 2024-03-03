import React from 'react';

import { MeaningType } from '@/types/meaning-type';

const ContentSynonyms = (props: {meaning: MeaningType}) => {
    console.log(props.meaning.synonyms);

    return (
        <div className="flex gap-x-4">
            <h3 className="heading-s text-white-100">Synonyms</h3>
            <p className="heading-s text-purple font-bold">{ props.meaning.synonyms }</p>
        </div>
    );
};

export default ContentSynonyms;