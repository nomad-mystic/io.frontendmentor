import React from 'react';
import { DictionaryType } from '@/types/dictionary-type';
import ContentSynonyms from '@/components/content/content-synonyms/content-synonyms';

const ContentMeaning = (props: { word: DictionaryType }) => {
    return (
        <>
            {
                props.word.meanings.map((meaning) => {
                    return (
                        <section key={ meaning.partOfSpeech } className="border-b">
                            <h2>{ meaning.partOfSpeech }</h2>

                            <h3>Meaning</h3>

                            <ul>
                                {
                                    meaning.definitions.length > 0 && meaning.definitions.map((def, index) => {
                                        return (
                                            <li key={ index }>
                                                <div>
                                                    { def.definition }
                                                </div>

                                                <div>
                                                    { def.example }
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            {
                                meaning.synonyms?.length > 0 && <ContentSynonyms meaning={ meaning } />
                            }
                        </section>
                    )
                })
            }
        </>
    );
};

export default ContentMeaning;