'use client';

// Community
import React, { useEffect, useState } from 'react';

// Types
import { MovieDataType } from '@/data/data-types';

// Components
import ContentItem from '@/components/content-item/content-item';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const BookmarkContent = (): React.JSX.Element => {
    const [bookmarkContent, setBookmarkContent] = useState<Array<MovieDataType>>([])

    useEffect(() => {
        let bookmarks = window.sessionStorage.getItem('bookmarks') || '';

        if (!bookmarks || typeof bookmarks === 'undefined') {
            return;
        }

        setBookmarkContent(JSON.parse(bookmarks));
    }, []);

    return (
        <main className="BookmarkContent Content">
            <h2 className="Content-header header-l">Bookmarks</h2>

            <section className="ItemContent">
                {
                    bookmarkContent.map((item) => {
                        // @ts-ignore
                        const objectItem = JSON.parse(item);

                        return (
                            <ContentItem key={ objectItem.title } data={ objectItem } />
                        )
                    })
                }
            </section>
        </main>
    );
};

export default BookmarkContent;
