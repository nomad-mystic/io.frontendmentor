import { createSlice } from '@reduxjs/toolkit';


const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        isOpen: false,
    },
    reducers: {
        toggleNavigation(state) {
            return {
                isOpen: !state.isOpen,
            }
        },
    }
});

export const navigationAction = navigationSlice.actions;

export default navigationSlice;
