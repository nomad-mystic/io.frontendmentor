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

const Content = () => {
    const currentWord = useWordStore((state) => state.currentWord);

    return (
        <main>
            {
                currentWord && currentWord.length > 0 && currentWord.map((word: DictionaryType, index: number) => {
                    return (
                        <section key={ index }>
                            {
                                <ContentHeader word={ word } />
                            }

                            {
                                word.meanings.length > 0 && <ContentMeaning word={ word } />
                            }

                            {
                                // @todo create a map for multiple sourceURLs i.e. component and add link
                                word.sourceUrls && word.sourceUrls.length > 0 && (
                                    <footer className="flex gap-x-4 border-t border-white-75 mt-10">
                                        <h3 className="body-s text-white-100 underline mt-5">Source</h3>
                                        <p className="body-s text-black-50 underline mt-5 relative flex gap-x-2">
                                            { word.sourceUrls[0] }
                                            <span className="after:bg-[url('/icon-new-window.svg')]
                                                after:block after:h-[14px] after:w-[14px]"></span>
                                        </p>
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