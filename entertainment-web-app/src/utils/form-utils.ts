/**
 * @classdesc Handle functionality for form elements
 * @class FormUtils
 * @author Keith Murphy | nomadmystics@gmail.com
 */
export default class FormUtils {
    /**
     * @description Pass this an input value and do simple validation for empty
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {string} value
     * @return {boolean}
     */
    public static validateFormElementIsEmpty = (value: string): boolean => {
        let isValid = true;

        if (!value || typeof value === 'undefined' || value === '') {
            return false;
        }

        return isValid;
    };

    /**
     * @description Pass this an input value and do simple validation for length
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {string} value
     * @return {boolean}
     */
    public static validateFormElementHasLength = (value: string): boolean => {
        let isValid = true;

        if (!value || typeof value === 'undefined' || value.length <= 0) {
            return false;
        }

        return isValid;
    };

    /**
     * @description Pass this an input value and do simple validation
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param formValues
     */
    public static validateFormElements = <T>(formValues: T): object => {
        // Local State
        let localIsValid: Record<string, unknown> = {};

        // Bail early
        if (!formValues || typeof formValues === 'undefined') {
            return localIsValid;
        }

        for (const inputKey in formValues) {
            if (Object.hasOwn(formValues, inputKey)) {
                // @ts-ignore
                const inputValue: string = formValues[inputKey];

                console.log(`${ inputKey }: ${ inputValue }`);

                let isValid = FormUtils.validateFormElementIsEmpty(inputValue);

                if (isValid) {
                    localIsValid[`${inputKey}`] = inputValue;
                }
            }
        }

        return localIsValid;
    };
}
