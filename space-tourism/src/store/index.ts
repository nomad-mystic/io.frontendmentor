import { configureStore } from '@reduxjs/toolkit';

// Slices
import navigationSlice from './slices/navigation/navigation-slice';

/**
 * @description Build our reducers
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {EnhancedStore}
 */
const store = configureStore({
    reducer: {
        navigation: navigationSlice.reducer,
    },
});

export default store;
