
/**
 * @classdesc Handle functionality for form elements
 * @class FormUtils
 * @author Keith Murphy | nomadmystics@gmail.com
 */
export default class FormUtils {
    /**
     * @description Pass this an input value and do simple validation
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {<T> | null} element
     * @return boolean
     */
    public static validateFormElements = <T extends HTMLInputElement>(element: T | null): boolean => {
        let isValid = true;

        if (!element || typeof element === 'undefined' || element.value === '') {
            return false;
        }

        return isValid;
    };
}
