import React from 'react';

import { MeaningType } from '@/types/meaning-type';

const ContentSynonyms = (props: {meaning: MeaningType}) => {
    console.log(props.meaning.synonyms);

    return (
        <div className="flex gap-x-4 mt-10">
            <h3 className="heading-s text-white-100">Synonyms</h3>

            {
                props.meaning.synonyms.map((synonym) => {
                    return (
                        <p key={synonym} className="heading-s text-purple font-bold">{ synonym }</p>
                    )
                })
            }
        </div>
    );
};

export default ContentSynonyms;