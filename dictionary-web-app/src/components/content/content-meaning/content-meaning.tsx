import React from 'react';
import { DictionaryType } from '@/types/dictionary-type';

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
                                            <li key={ index }>{ def.definition }</li>
                                        )
                                    })
                                }
                            </ul>

                            {
                                meaning.synonyms?.length > 0 && (
                                    <div className="flex gap-x-4">
                                        <h3>Synonyms</h3>
                                        <p>{ meaning.synonyms }</p>
                                    </div>
                                )
                            }
                        </section>
                    )
                })
            }
        </>
    );
};

export default ContentMeaning;