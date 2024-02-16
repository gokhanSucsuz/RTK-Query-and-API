import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_CAT_API_KEY;
const API_URL = import.meta.env.VITE_CAT_API_URL;

export const catApiSlice = createApi({
	reducerPath: "catApi",
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders(headers) {
			headers.set("x-api-key", API_KEY);
			return headers;
		},
	}),
	endpoints(builder) {
		return {
			fetchCategories: builder.query({
				query() {
					return "/breeds";
				},
			}),
			fetchCategory: builder.query({
				query(categoryName) {
					return `images/search?breed_ids=${categoryName}&limit=10`;
				},
			}),
		};
	},
});

export const { useFetchCategoriesQuery, useFetchCategoryQuery } = catApiSlice;
