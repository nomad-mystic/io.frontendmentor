import { MovieDataType } from '@/types/data-types';

/**
 * @classdesc Handle functionality for window.sessionStorage
 * @class StorageUtils
 * @author Keith Murphy | nomadmystics@gmail.com
 */
export default class StorageUtils {
    /**
     * @description Bases on user selection add our bookmark
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {MovieDataType} currentObject
     * @return {void}
     */
    public static addBookmarkToStorage = (currentObject: MovieDataType): void => {
        // Set initial state
        if (!window.sessionStorage.getItem('bookmarks') || typeof window.sessionStorage.getItem('bookmarks') === 'undefined') {
            window.sessionStorage.setItem('bookmarks', JSON.stringify([]));
        }

        let bookmarks = window.sessionStorage.getItem('bookmarks');

        if (bookmarks && typeof bookmarks !== 'undefined') {
            let bookmarksArray = JSON.parse(bookmarks);
            let wasFound = false;

            // Make sure we don't deduplicate the bookmark in our storage
            for (const bookmarksArrayElement of bookmarksArray) {
                if (!bookmarksArrayElement) {
                    continue;
                }

                let bookmarksElement = JSON.parse(bookmarksArrayElement);

                if (bookmarksElement.title === currentObject.title) {
                    wasFound = true;
                    break;
                }
            }

            if (!wasFound) {
                bookmarksArray.push(JSON.stringify(currentObject));
            }

            window.sessionStorage.setItem('bookmarks', JSON.stringify(bookmarksArray));
        }
    };

    /**
     * @description Bases on user selection remove our bookmark
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {MovieDataType} currentObject
     * @return {void}
     */
    public static removeBookmarkFromStorage = (currentObject: MovieDataType): void => {
        if (!window.sessionStorage.getItem('bookmarks') || typeof window.sessionStorage.getItem('bookmarks') === 'undefined') {
            return;
        }

        let bookmarks = window.sessionStorage.getItem('bookmarks');

        if (bookmarks && typeof bookmarks !== 'undefined') {
            let bookmarksArray = JSON.parse(bookmarks);

            // Filter out the removed bookmark
            let updatedBookmarks = bookmarksArray.filter((bookmark: MovieDataType) => {
                let book = bookmark as unknown as string;
                let bookmarkJson = JSON.parse(book);

                if (currentObject.title !== bookmarkJson.title) {
                    return bookmarkJson;
                }
            });

            window.sessionStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
        }
    };

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return array
     */
    public static getStorageArray = (storageName: string) => {
        // Set initial state
        if (!window.sessionStorage.getItem(storageName) || typeof window.sessionStorage.getItem(storageName) === 'undefined') {
            window.sessionStorage.setItem(storageName, JSON.stringify([]))
        }

        return JSON.parse(window.sessionStorage.getItem(storageName) ?? '[]');
    };

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return
     */
    public static createStorageArray = (storageType: string, data: Array<{}>) => {
        window.sessionStorage.setItem(storageType, JSON.stringify(data));
    };
}
