import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState()

/**
 * https://redux-toolkit.js.org/rtk-query/usage/code-splitting
 * RTK Query makes it possible to trim down your initial bundle size by allowing you to inject additional endpoints after you've set up your initial service definition.
 */
export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            transformResponse: responseData => {
                return usersAdapter.setAll(initialState, responseData)
            },
            providesTags: (result, error, arg) => [
                { type: 'User', id: "LIST" },
                ...result.ids.map(id => ({ type: 'User', id }))
            ]
        })
    })
})

export const {
    useGetUsersQuery
} = usersApiSlice