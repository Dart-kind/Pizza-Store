import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductCard } from "@/store/models/ProductCard"
import { ProductPromo } from "@/store/models/ProductPromo"
import { Branch } from "@/store/models/Location"


export const postApi = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Post', 'Promo', 'Branch', 'BranchCities'],
  endpoints: (build) => ({
    fetchAllPost: build.query<ProductCard[], number>({
      query: (limit: number = 12) => ({
        url: `/posts`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: ['Post'],
    }),
    fetchAllPromo: build.query<ProductPromo[], number>({
      query: (limit: number = 3) => ({
        url: `/promo`,
        params: {
          _limit: limit,
        },
      }),

      providesTags: ['Promo'],
    }),
    fetchBranchDetails:  build.query<Branch, number>({
      query: (id) => `branch/${id}`,

      providesTags: ['Branch'],
    }),
    fetchBranchCities : build.query<Branch[], void>({
      query: () => 'branch',

      providesTags: ['BranchCities'],

    }),
    })
  })
