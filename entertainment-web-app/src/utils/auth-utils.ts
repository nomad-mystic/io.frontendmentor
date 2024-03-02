// Utils
import StorageUtils from '@/utils/storage-utils';

// Types
import { AuthFormValueType } from '@/types/auth-types';

/**
 * @classdesc Handle auth functionality
 * @class AuthUtils
 * @author Keith Murphy | nomadmystics@gmail.com
 */
export default class AuthUtils {
    /**
     * @description Add our user to the auth storage
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    public static createAuthStorage = <T extends Array<AuthFormValueType>>(authStorage: T, authData: AuthFormValueType): void => {
        if (!authStorage || typeof authStorage === 'undefined' || authStorage.length <= 0) {
            // Extract our values
            const { email, password } = authData;

            const data = [
                {
                    email: email,
                    password: password,
                },
            ];

            StorageUtils.createStorageArray('auth', data);
        }
    };
}
