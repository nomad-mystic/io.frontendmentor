import React from 'react';

// Types
import { MeaningType } from '@/types/meaning-type';

// Stores
import useWordStore from '@/store/word-store';

// Server Actions
import { getWord } from '@/actions/dictionary-rest';

/**
 * @description
 * @public 
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return 
 */
const ContentSynonyms = (props: { meaning: MeaningType }) => {
    const updatedWord = useWordStore((state) => state.updatedWord);

    
    /**
     * @description
     * @public 
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return 
     */
    const handleNewSearch = async (event: React.MouseEvent<HTMLElement>) => {
        if (!event.target || typeof event.target === 'undefined' ) {
            return;
        }

        const target = event.target as HTMLParagraphElement;

        // Fetch API from the server action
        const word = await getWord(target.innerText);

        // Update our state
        updatedWord(word);
    };

    return (
        <div className="flex gap-x-4 mt-10">
            <h3 className="heading-s text-white-100">Synonyms</h3>

            {
                props.meaning.synonyms.map((synonym: string, index: number) => {
                    return (
                        <p key={ index } className="heading-s text-purple font-bold hover:underline active:underline cursor-pointer"
                           onClick={ async (e) => await handleNewSearch(e) }>{ synonym }</p>
                    )
                })
            }
        </div>
    );
};

export default ContentSynonyms;