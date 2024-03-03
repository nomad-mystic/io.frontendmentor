import React from 'react';
import Image from 'next/image';
import { DictionaryType } from '@/types/dictionary-type';

const ContentHeader = (props: { word: DictionaryType }) => {
    /**
     * @description Extract the first audio URL and play the word
     * @public 
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return 
     */
    const handleAudioPlay = async (word: DictionaryType) => {
        try {
            // Bail early
            if (!word.phonetics || typeof word.phonetics === 'undefined' || word.phonetics.length <= 0) {
                return;
            }

            let sound: HTMLAudioElement;
            let audioUrl = '';

            for (let s = 0; s < word.phonetics.length; s++) {
                if (!word.phonetics[s] ||
                    typeof word.phonetics[s] === 'undefined' ||
                    !word.phonetics[s].audio ||
                    word.phonetics[s].audio === ''
                ) {
                    continue;
                }

                audioUrl = word.phonetics[s].audio;

                break;
            }

            // Create our Audio constructor
            sound = new Audio(audioUrl);

            // Play the sound
            await sound.play();
        } catch (e) {
            console.error(e);
        }
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