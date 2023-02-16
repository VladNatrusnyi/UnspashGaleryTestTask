
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CONSTANTS } from "../../helpers/constants";

export const unspashApi = createApi({
  reducerPath: 'unspashApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.unsplash.com/' }),
  endpoints: (builder) => ({
    getImage: builder.query({
      query: (imgId) => ({
        url: `photos/${imgId}?&client_id=${CONSTANTS.clientId}`,
      }),
    }),
  }),
})

export const {
  useGetImageQuery,
} = unspashApi
