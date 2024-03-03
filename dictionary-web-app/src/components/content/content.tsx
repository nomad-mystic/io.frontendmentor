'use client';

// Community
import React, { useState } from 'react';

// Server Actions
import { getWord } from '@/actions/dictionary-rest';

// Types
import { DictionaryType } from '@/types/dictionary-type';
import Image from 'next/image';
import ContentHeader from '@/components/content/content-header/content-header';
import ContentMeaning from '@/components/content/content-meaning/content-meaning';

const Content = () => {
    const [currentWord, setCurrentWord] = useState([]);

    return (
        <main>
            <button
                onClick={ async () => {
                    const word = await getWord('keyboard')

                    setCurrentWord(word)

                    console.log(word);
                } }>
                Like
            </button>

            {
                currentWord.map((word: DictionaryType) => {
                    return (
                        <section key={ word.word }>
                            {
                                <ContentHeader word={ word } />
                            }

                            {
                                word.meanings.length > 0 && <ContentMeaning word={ word } />
                            }

                            {
                                word.sourceUrls[0] && word.sourceUrls[0].length > 0 && (
                                    <footer className="flex gap-x-4">
                                        <h3>Source</h3>
                                        <p>{ word.sourceUrls[0] }</p>
                                    </footer>
                                )
                            }
                        </section>
                    )
                })
            }

        </main>
    );
};

export default Content;