import StorageUtils from '@/utils/storage-utils';
import { AuthStorageTypes } from '@/types/auth-types';

/**
 * @classdesc
 * @class AuthUtils
 * @author Keith Murphy | nomadmystics@gmail.com
 */
export default class AuthUtils {

    /**
     * @description Add our user to the auth storage
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return
     */
    public static createAuthStorage = <T extends Array<AuthStorageTypes>>(authStorage: T, authData: AuthStorageTypes) => {
        if (!authStorage || typeof authStorage === 'undefined' || authStorage.length <= 0) {
            // Extract our values
            const { currentEmail, currentPassword } = authData;

            const data = [
                {
                    email: currentEmail?.value,
                    password: currentPassword?.value,
                },
            ];

            StorageUtils.createStorageArray('auth', data);
        }
    };

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return
     */
    public static setVisualStateAfterLogin = <T extends Array<AuthStorageTypes>>(authStorage: T, authData: AuthStorageTypes) => {
        // They have a session check auth data
        if (authStorage && typeof authStorage !== 'undefined' && authStorage.length > 0) {
            const {
                currentEmail,
                currentPassword,
                currentConfirmPassword = null
            } = authData;

            const authStorageArray = StorageUtils.getStorageArray('auth')[0];

            if (!authStorageArray || typeof authStorageArray === 'undefined') {
                return;
            }

            if (authStorageArray?.email === currentEmail?.value && authStorageArray?.password === currentPassword?.value) {
                this.setVisualStates();
            }
        }
    }

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return
     */
    public static setVisualStates = (authSelector: string = '.Auth') => {
        const authPoint = window.document.querySelector('.AuthPoint');
        const currentAuthElement = window.document.querySelector(authSelector);

        if (authPoint && typeof authPoint !== 'undefined') {
            authPoint.classList.add('isVisible');
        }

        if (currentAuthElement && typeof currentAuthElement !== 'undefined') {
            currentAuthElement.classList.add('isInvisible');
        }
    }
}
