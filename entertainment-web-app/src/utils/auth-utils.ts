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
}
