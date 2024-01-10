// Community
import React from 'react';

// Types
import { toggleActiveTypes } from './types/UiTypes.ts';

/**
 * @classdesc Build utils for UI interactions
 * @class UiUtils
 * @author Keith Murphy | nomadmystics@gmail.com
 */
export default class UiUtils {
    /**
     * @description Based on the target passed to this return target and closet parent
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {toggleActiveTypes}
     */
    public static toggleActive = (event: React.MouseEvent<HTMLElement, MouseEvent>, tagName: string = 'LI', parentItemSelector: string = 'li'): toggleActiveTypes => {
        const target: HTMLElement = event.target as HTMLElement;

        // Sanity check
        if (target && typeof target !== 'undefined' && target.tagName === tagName) {

            // Get our parent
            const parentListItem = target.closest(parentItemSelector);

            return {
                target,
                parentListItem,
            }
        }

        return {};
    };
}
