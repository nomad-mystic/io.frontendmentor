// Community
import React from 'react';

// Types
import { NotFoundType } from '@/types/not-found-type';
import { DictionaryType } from '@/types/dictionary-type';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return
 */
const NotFound = (props: { notFound: Pick<NotFoundType, any>}) => {
    return (
        <section className="flex flex-col items-center mt-32">
            <span className="text-[64px]">&#128533;</span>
            <h1 className="heading-s font-bold text-black-50 mt-11">{ props.notFound.title }</h1>
            <p className="body-m text-white-100 text-center mt-6">{ props.notFound.message } { props.notFound.resolution }</p>
        </section>
    );
};

export default NotFound;