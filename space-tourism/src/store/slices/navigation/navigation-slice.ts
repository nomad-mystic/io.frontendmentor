// Community
import { createSlice } from '@reduxjs/toolkit';

/**
 * @description Create our slice for the navigation reducer
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {Slice}
 */
const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        isOpen: false,
    },
    reducers: {
        toggleNavigation(state) {
            return {
                isOpen: !state.isOpen,
            };
        },
        closeNavigation() {
            return {
                isOpen: false,
            };
        },
    }
});

export const navigationAction = navigationSlice.actions;

export default navigationSlice;
