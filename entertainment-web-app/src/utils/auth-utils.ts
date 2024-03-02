import StorageUtils from '@/utils/storage-utils';
import { AuthFormValueType } from '@/types/auth-types';

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
    public static createAuthStorage = <T extends Array<AuthFormValueType>>(authStorage: T, authData: AuthFormValueType) => {
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
