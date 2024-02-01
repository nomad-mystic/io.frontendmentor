'use client';

// Community
import React, { useEffect, useState } from 'react';

// Styles
import './bookmark-content.css';

// Types
import { MovieDataType } from '@/types/data-types';

// Components
import ContentItem from '@/components/content-item/content-item';

/**
 * @description Build our bookmarked content items
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const BookmarkContent = (): React.JSX.Element => {
    const [bookmarkContent, setBookmarkContent] = useState<Array<MovieDataType>>([])

    useEffect(() => {
        let bookmarks = window.sessionStorage.getItem('bookmarks') || '[]';

        if (!bookmarks || typeof bookmarks === 'undefined') {
            return;
        }

        setBookmarkContent(JSON.parse(bookmarks));
    }, []);

    return (
        <main className="BookmarkContent Content">
            <section className="BookmarkContent-movies">
                <header>
                    <h2 className="Content-header header-l">Bookmarked Movies</h2>
                </header>

                <section className="ItemContent">
                    {
                        bookmarkContent
                            .filter((item) => {
                                // @ts-ignore
                                const objectItem = JSON.parse(item);

                                return objectItem.category === 'Movie';
                            })
                            .map((item) => {
                                // @ts-ignore
                                const objectItem = JSON.parse(item);

                                return (
                                    <ContentItem key={ objectItem.title } data={ objectItem } />
                                );
                            })
                    }
                </section>
            </section>

            <section className="BookmarkContent-tv">
                <header>
                    <h2 className="Content-header header-l">Bookmarked TV Series</h2>
                </header>

                <section className="ItemContent">
                    {
                        bookmarkContent
                            .filter((item) => {
                                // @ts-ignore
                                const objectItem = JSON.parse(item);

                                return objectItem.category === 'TV Series';
                            })
                            .map((item) => {
                                // @ts-ignore
                                const objectItem = JSON.parse(item);

                                return (
                                    <ContentItem key={ objectItem.title } data={ objectItem } />
                                );
                            })
                    }
                </section>
            </section>
        </main>
    );
};

export default BookmarkContent;
