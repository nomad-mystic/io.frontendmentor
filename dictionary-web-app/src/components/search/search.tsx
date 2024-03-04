'use client';

import React, { useEffect, useRef } from 'react';

// Stores
import useWordStore from '@/store/word-store';
import useSynonymsStore from '@/store/synonyms-store';

// Server Actions
import { getWord } from '@/actions/dictionary-rest';

const Search = () => {
    // Refs
    const searchInput = useRef<HTMLInputElement>(null);

    // States
    const updatedWord = useWordStore((state) => state.updatedWord);
    const synonym = useSynonymsStore((state) => state.synonym);

    console.log(synonym);

    /**
     * @description
     * @public 
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return 
     */
    const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        try {
            // Baily early
            if (!event || typeof event === 'undefined') {
                return;
            }

            // Make sure the user clicks the right key
            if (event.key === 'Enter' || event.key === 'NumpadEnter') {
                event.preventDefault();

                // Our current input
                const current = searchInput.current as HTMLInputElement;

                // @todo update input state here?
                if (current.value === '') {
                    return;
                }

                // Fetch API from the server action
                const word = await getWord(current.value);

                // Update our state
                updatedWord(word);
            }
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        if (searchInput.current && typeof searchInput.current !== 'undefined' && synonym.length > 0) {
            searchInput.current.value = synonym;
        }
    }, [synonym]);

    return (
        <section className="pt-12">
            <div className="relative bg-white-50 rounded-[16px] flex items-center">
                <input type="text"
                       placeholder="Search for any word…"
                       className="rounded-[16px] bg-white-50 w-full h-16 p-5 focus:outline-none focus:ring-1 focus:ring-purple"
                       onKeyDown={ handleKeyDown }
                       ref={ searchInput }
                />
                <span className="absolute right-6 w-[18px] h-[18px] bg-search-icon"></span>
            </div>
        </section>
    );
};

export default Search;