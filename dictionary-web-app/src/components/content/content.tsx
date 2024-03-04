'use client';

// Community
import React, { useState } from 'react';

// Server Actions
import { getWord } from '@/actions/dictionary-rest';

// Types
import { DictionaryType } from '@/types/dictionary-type';

// Components
import ContentHeader from '@/components/content/content-header/content-header';
import ContentMeaning from '@/components/content/content-meaning/content-meaning';

// Stores
import useWordStore from '@/store/word-store';
import ContentSourceUrls from '@/components/content/content-source-urls/content-source-urls';
import NotFound from '@/components/not-found/not-found';

const Content = () => {
    const currentWord = useWordStore((state) => state.currentWord);

    console.log(currentWord);

    return (
        <main>
            {
                currentWord && Array.isArray(currentWord) && currentWord.map((word: DictionaryType, index: number) => {
                    return (
                        <section className="mt-11 [&:not(:first-child)]:mt-14" key={ index }>
                            {
                                <ContentHeader word={ word } />
                            }

                            {
                                word.meanings.length > 0 && <ContentMeaning word={ word } />
                            }

                            {
                                word.sourceUrls && word.sourceUrls.length > 0 && <ContentSourceUrls word={ word } />
                            }
                        </section>
                    )
                })
            }

            {
                currentWord && !Array.isArray(currentWord) && <NotFound notFound={ currentWord } />
            }
        </main>
    );
};

export default Content;