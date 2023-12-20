import { configureStore } from '@reduxjs/toolkit';

import navigationSlice from './slices/navigation/navigation-slice';

const store = configureStore({
    reducer: {
        navigation: navigationSlice.reducer,
    },
});

export default store;
