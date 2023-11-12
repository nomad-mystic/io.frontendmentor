/**
 * @classdesc
 * @class ElementUtils
 * @author Keith Murphy | nomadmystics@gmail.com
 */
export default class ElementUtils {

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {NodeListOf<Element>} elements
     * @return {void}
     */
    public static removeClassFromAllElements = (elements: NodeListOf<Element>): void => {
        if (elements && typeof elements !== 'undefined' && elements.length > 0) {

            for (let el: number = 0; el < elements.length; el++) {

                if (elements[el] && typeof elements[el] !== 'undefined') {

                    elements[el].classList.remove('active');

                }

            }
        }
    };
}
