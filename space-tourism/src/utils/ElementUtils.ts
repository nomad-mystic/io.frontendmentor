/**
 * @classdesc Build utils for elements
 * @class ElementUtils
 * @author Keith Murphy | nomadmystics@gmail.com
 */
export default class ElementUtils {
    /**
     * @description Removes CSS classes from a list of nodes
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {string} selector
     * @param {string} className
     * @return {void}
     */
    public static removeClassFromAllElements = (selector: string, className: string = 'active'): void => {
        const elements = window.document.querySelectorAll(selector)

        if (elements && typeof elements !== 'undefined' && elements.length > 0) {

            for (let el: number = 0; el < elements.length; el++) {

                if (elements[el] && typeof elements[el] !== 'undefined') {

                    elements[el].classList.remove(className);

                }

            }
        }
    };
}
