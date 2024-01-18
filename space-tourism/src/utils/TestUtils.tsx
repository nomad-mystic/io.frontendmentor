// Community
import React, { PropsWithChildren } from 'react';
import { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore, EnhancedStore } from '@reduxjs/toolkit'
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

// Slices
import navigationSlice from '../store/slices/navigation/navigation-slice';

// Types
type AppStore = ReturnType<typeof TestUtils.setupStore>

// Interfaces
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<{}>;
    store?: AppStore;
}

/**
 * @classdesc
 * @class
 * @extends
 * @implements
 * @link https://redux.js.org/usage/writing-tests#setting-up-a-reusable-test-render-function
 * @author Keith Murphy | nomadmystics@gmail.com
 */
export default class TestUtils {
    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return
     */
    public static renderWithProviders(
        ui: React.ReactElement,
        {
            preloadedState = {},
            // Automatically create a store instance if no store was passed in
            store = TestUtils.setupStore(),
            ...renderOptions
        }: ExtendedRenderOptions = {}
    ) {
        function Wrapper({ children }: PropsWithChildren<{}>): React.JSX.Element {
            return <Provider store={ store }>{ children }</Provider>
        }

        // Return an object with the store and all of RTL's query functions
        return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
    }

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {EnhancedStore}
     */
    public static setupStore(preloadedState?: Partial<{}>): EnhancedStore {
        const rootReducer = combineReducers({
            navigation: navigationSlice.reducer,
        });

        return configureStore({
            reducer: rootReducer,
            preloadedState,
        });
    }

    /**
     * @description Build a wrapper for components in <router>
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     * @link https://testing-library.com/docs/example-react-router/
     *
     * @return {object}
     */
    public static renderWithRouter(ui: React.ReactElement, { route = '/' } = {}) {
        window.history.pushState({}, 'Test page', route);

        return {
            user: userEvent.setup(),
            ...render(ui, { wrapper: BrowserRouter }),
        }
    }
}
