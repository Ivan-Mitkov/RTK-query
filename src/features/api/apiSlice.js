/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

/**
 * The core of RTK Query's functionality. It allows you to define a set of endpoints describe how to retrieve data from a series of endpoints, including configuration of how to fetch and transform that data. In most cases, you should use this once per app, with "one API slice per base URL" as a rule of thumb
 */
export const apiSlice = createApi({
    reducerPath: 'api', // optional

    /**
     * fetchBaseQuery
     * A small wrapper around fetch that aims to simplify requests. Intended as the recommended baseQuery to be used in createApi for the majority of users.
     */
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    /**
     * RTK Query uses the concept of 'tags' to determine whether a mutation for one endpoint intends to invalidate some data that was provided by a query from another endpoint.

If cache data is being invalidated, it will either refetch the providing query (if components are still using that data) or remove the data from the cache.

When defining an API slice, createApi accepts an array of tag type names for the tagTypes property, which is a list of possible tag name options that the queries for the API slice could provide.

By declaring these tags as what can possibly be provided to the cache, it enables control for individual mutation endpoints to claim whether they affect specific portions of the cache or not, in conjunction with providesTags and invalidatesTags on individual endpoints.
     */
    tagTypes: ['Post', 'User'],
    endpoints: builder => ({})
})

