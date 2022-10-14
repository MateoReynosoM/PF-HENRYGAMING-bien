import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const partsApi = createApi({
    reducerPath: "partsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    endpoints: (builder) => ({
        getParts: builder.query({
            query: () => `parts`,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPartsQuery } = partsApi;
