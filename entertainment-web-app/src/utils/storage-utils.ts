import { MovieDataType } from '@/data/data-types';
import data from '@/data/data.json';

export default class StorageUtils {

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {HTMLDivElement} element
     * @return {MovieDataType | undefined}
     */
    public static getItemTitle = (element: HTMLDivElement): MovieDataType | undefined => {
        // Get the parent
        const currentItem = element.closest('.ContentItem');

        if (!currentItem || typeof currentItem === 'undefined') {
            return;
        }

        // Extract title
        const title = currentItem?.querySelector('.ContentItem-title');

        if (!title || typeof title === 'undefined') {
            return;
        }

        const titleContent = title.innerHTML;

        // Get our current object by title
        const currentObject = this.findCurrentObject(titleContent);

        if (!currentObject || typeof currentObject === 'undefined') {
            return;
        }

        return currentObject;
    };

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {string} titleContent
     * @return {MovieDataType | undefined}
     */
    public static findCurrentObject = (titleContent: string): MovieDataType | undefined => {
        const currentObject = data.filter((item) => {
            return item.title === titleContent;
        });

        if (!currentObject) {
            return;
        }

        return currentObject[0];
    };

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
    }
}
