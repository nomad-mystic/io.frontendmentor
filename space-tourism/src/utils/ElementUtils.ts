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
     * @param {NodeListOf<Element>} elements
     * @param {string} className
     * @return {void}
     */
    public static removeClassFromAllElements = (elements: NodeListOf<Element>, className: string = 'active'): void => {
        if (elements && typeof elements !== 'undefined' && elements.length > 0) {

            for (let el: number = 0; el < elements.length; el++) {

                if (elements[el] && typeof elements[el] !== 'undefined') {

                    elements[el].classList.remove(className);

                }

            }
        }
    };
}
