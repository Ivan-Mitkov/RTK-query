import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from '../features/api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query'
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    //https://redux-toolkit.js.org/api/getDefaultMiddleware getDefaultMiddleware Returns an array containing the default list of middleware.
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
        .concat(logger)
        ,
    devTools: true
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)