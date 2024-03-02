import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import { DictionaryType } from '@/types/dictionary-type';

const ContentHeader = (props: { word: DictionaryType }) => {
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
                       height={ 75 } />
            </div>
        </header>
    );
};

export default ContentHeader;