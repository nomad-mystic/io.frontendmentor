// Community
import React from 'react';

// Types
import { DictionaryType } from '@/types/dictionary-type';

// Components
import ContentSynonyms from '@/components/content/content-synonyms/content-synonyms';

/**
 * @description
 * @public 
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return 
 */
const ContentMeaning = (props: { word: DictionaryType }) => {
    return (
        <>
            {
                props.word.meanings.map((meaning, index) => {
                    return (
                        <section key={ index } className="mt-10">
                            <h2 className="heading-m font-bold italic text-black-50 flex gap-x-5">
                                { meaning.partOfSpeech }
                                <span className="relative block w-full">
                                    <span className="w-full absolute top-1/2 border border-white-75"></span>
                                </span>
                            </h2>

                            <h3 className="heading-s text-white-100 mt-9">Meaning</h3>

                            <ul className="ml-10 mt-6">
                                {
                                    meaning.definitions.length > 0 && meaning.definitions.map((def, index) => {
                                        return (
                                            <li key={ index } className="list-disc marker:text-purple [&:not(:first-child)]:mt-3">
                                                <div>
                                                    <p className="body-m text-black-50">{ def.definition }</p>
                                                </div>

                                                {
                                                    def.example && (
                                                        <div>
                                                            <p className="body-m text-white-100 mt-3">"{ def.example }"</p>
                                                        </div>
                                                    )
                                                }
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