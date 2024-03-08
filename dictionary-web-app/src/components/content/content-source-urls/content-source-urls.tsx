// Community
import React from 'react';
import Link from 'next/link';

// Types
import { DictionaryType } from '@/types/dictionary-type';

/**
 * @description
 * @public 
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return 
 */
const ContentSourceUrls = (props: { word: DictionaryType }) => {
    return (
        <footer className="border-t border-white-75 mt-10">
            {
                props.word.sourceUrls && props.word.sourceUrls.length > 0 && props.word.sourceUrls.map((url, index: number) => {
                    return (
                        <section key={ index } className="flex gap-x-4">
                            <h3 className="body-s text-white-100 mt-5">Source</h3>
                            <Link className="body-s text-black-50 dark:text-white-25 mt-5 relative flex gap-x-2" href={url} target="_blank" rel="noreferrer">
                                { url }
                                <span className="after:bg-[url('/icon-new-window.svg')]
                                        after:block after:h-[14px] after:w-[14px]"></span>
                            </Link>
                        </section>
                    )
                })
            }
        </footer>
    );
};

export default ContentSourceUrls;