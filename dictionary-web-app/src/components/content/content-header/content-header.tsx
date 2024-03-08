// Community
import React from 'react';
import Image from 'next/image';

// Types
import { DictionaryType } from '@/types/dictionary-type';

const ContentHeader = (props: { word: DictionaryType }) => {
    const playShape = `
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75">
            <g fill="#A445ED" fill-rule="evenodd">
                <circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/>
                <path d="M29 27v21l21-10.5z"/>
            </g>
        </svg>`;

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

            if (audioUrl !== '') {
                // Create our Audio constructor
                sound = new Audio(audioUrl);

                // Play the sound
                await sound.play();
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <header className="flex justify-between">
            <div>
                <h1 className="heading-l text-black-50 dark:text-white-25">{ props.word.word }</h1>
                <p className="heading-m text-purple mt-1">{ props.word.phonetic }</p>
            </div>

            <div>

                {/*<div dangerouslySetInnerHTML={{ __html: playShape}}></div>*/}

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