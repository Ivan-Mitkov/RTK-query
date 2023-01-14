/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import logger from 'redux-logger'

/**
 * The core of RTK Query's functionality. It allows you to define a set of endpoints describe how to retrieve data from a series of endpoints, including configuration of how to fetch and transform that data. In most cases, you should use this once per app, with "one API slice per base URL" as a rule of thumb
 */
export const apiSlice = createApi({
    reducerPath: 'api', // optional
    middleware: [ logger],

    /**
     * fetchBaseQuery
     * A small wrapper around fetch that aims to simplify requests. Intended as the recommended baseQuery to be used in createApi for the majority of users.
     */
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    tagTypes: ['Post', 'User'],
    endpoints: builder => ({})
})

