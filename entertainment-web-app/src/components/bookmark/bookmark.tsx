'use client';

// Community
import React, { useEffect, useRef, useState } from 'react';

// Styles
import './bookmark.css'

// Utils
import StorageUtils from '@/utils/storage-utils';
import ItemUtils from '@/utils/item-utils';

/**
 * @description Build the functionality for our bookmarks
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const Bookmark = (): React.JSX.Element => {
    const [bookmarked, setBookmarked] = useState(false);
    const divElement = useRef<HTMLDivElement>(null);

    /**
     * @description Build our bookmark functionality
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {React.MouseEvent<HTMLDivElement>} event
     * @return {void}
     */
    const handleBookmark = (event: React.MouseEvent<HTMLDivElement>): void => {
        const target = event.target as HTMLDivElement;

        if (target && typeof target !== 'undefined') {

            const currentObject = ItemUtils.getItemTitle(target);

            if (!currentObject || typeof currentObject === 'undefined') {
                return;
            }

            // Set our state
            setBookmarked((prevState) => {
                return !prevState;
            });

            if (bookmarked) {
                StorageUtils.removeBookmarkFromStorage(currentObject);
            } else {
                StorageUtils.addBookmarkToStorage(currentObject);
            }
        }
    };

    /**
     * @description Set bookmarks on initial load
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    const setInitialState = (): void => {
        // Get our ref
        const current = divElement.current as HTMLDivElement;

        // Extract the object
        const currentObject = ItemUtils.getItemTitle(current);

        if (!currentObject || typeof currentObject === 'undefined') {
            return;
        }

        // Our session storage
        let bookmarksStorage = window.sessionStorage.getItem('bookmarks');

        // Make sure we have valid JSON
        if (!bookmarksStorage || typeof bookmarksStorage === 'undefined') {
            bookmarksStorage = '[]';
        }

        let bookmarks = JSON.parse(bookmarksStorage);

        // Set our state if there is a matching-bookmarked object
        bookmarks.map((bookmark: string) => {
            if (!bookmark || typeof bookmark === 'undefined') {
                return;
            }

            const currentBookmark = JSON.parse(bookmark);

            if (currentBookmark.title === currentObject.title) {
                setBookmarked(true);
            }
        });
    }

    // CSS classes
    const bookMarkedClass = bookmarked ? 'isBookmarked' : '';

    useEffect(() => {
        setInitialState();
    }, []);

    return (
        <div className="Bookmark" onClick={ handleBookmark } ref={ divElement }>
            <svg width="32"
                 height="32" viewBox="0 0 32 32"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 className={ bookMarkedClass }
            >
                <circle opacity="0.500647" cx="16" cy="16" r="16" fill="#10141E" />
                <path
                    d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z"
                    stroke="white" strokeWidth="1.5" />
            </svg>
        </div>
    );
};

export default Bookmark;
