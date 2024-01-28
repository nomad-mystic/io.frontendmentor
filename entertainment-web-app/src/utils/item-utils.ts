// Types
import { MovieDataType } from '@/data/data-types';

// Data
import data from '@/data/data.json';

/**
 * @classdesc
 * @class
 * @extends
 * @implements
 * @author Keith Murphy | nomadmystics@gmail.com
 */
export default class ItemUtils {
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
     * @description Pass this a property and get the object related to the property
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {string} propertyValue
     * @param {string} property
     * @return {MovieDataType | undefined}
     */
    public static findCurrentObject = (propertyValue: string, property: string = 'title'): MovieDataType | undefined => {
        const currentObject = data.filter((item: MovieDataType) => {
            // @ts-ignore
            return item[property] === propertyValue;
        });

        if (!currentObject) {
            return;
        }

        return currentObject[0];
    };
}
