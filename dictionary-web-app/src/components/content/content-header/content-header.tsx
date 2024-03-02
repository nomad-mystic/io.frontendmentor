import React from 'react';
import Image from 'next/image';
import { DictionaryType } from '@/types/dictionary-type';

const ContentHeader = (props: { word: DictionaryType }) => {
    /**
     * @description
     * @public 
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return 
     */
    const handleAudioPlay = async (word: DictionaryType) => {
        // Bail early
        if (!word.phonetics || typeof word.phonetics === 'undefined' || word.phonetics.length <= 0) {
            return;
        }

        // "https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3"

        let sound = new Audio("https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3");

        await sound.play();
    };

    return (
        <header className="flex justify-between">
            <div>
                <h1>{ props.word.word }</h1>
                <p className="text-purple">{ props.word.phonetic }</p>
            </div>

            <div>
                <Image src="/icon-play.svg"
                       alt="Cricle with triangle in the center"
                       width={ 75 }
                       height={ 75 }
                       onClick={ async () => await handleAudioPlay(props.word) }
                       className="cursor-pointer"
                />
            </div>
        </header>
    );
};

export default ContentHeader;