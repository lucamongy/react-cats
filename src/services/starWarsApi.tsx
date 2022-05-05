// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const starWarsApi = createApi({
  reducerPath: 'starWars',
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api" }),
  endpoints: (builder) => ({
    
    getFilms: builder.query({
      query: () => `/films?format=json`
    }),

    getFilmById: builder.query({
      query: (filmId) => `/films/${filmId}?format=json`
    })

  })
})

export const { useGetFilmsQuery, useGetFilmByIdQuery } = starWarsApi