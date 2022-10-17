import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const partsApi = createApi({
    reducerPath: "partsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `products`,
        }),
        getProductsByModel: builder.query({
            query: (model) => `productModel?model=${model}`,
        }),
        getProductsFilterByPrice: builder.query({
            query: (min, max) => `productPrice?min=${min}&max=${max}`,
        }),
        getProductsFilterByBrand: builder.query({
            query: (brand) => `brand?brand=${brand}`,
        }),
        getProductsFilterByType: builder.query({
            query: (type) => `productType?type=${type}`,
        }),
        getCpusFilterByBrand: builder.query({
            query: (cpuBrand) => `cpuBrand?cpuBrand=${cpuBrand}`,
        }),
        getProductDetail: builder.query({
            query: (id) => `productDetail/${id}`,
        }),
        postProduct: builder.mutation({
            query: (data) => ({
                url: "postProduct",
                method: "post",
                body: data,
            }),
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetAllProductsQuery,
    useLazyGetProductsByModelQuery,
    useLazyGetProductsFilterByPriceQuery,
    useLazyGetProductsFilterByBrandQuery,
    useLazyGetProductsFilterByTypeQuery,
    useLazyGetCpusFilterByBrandQuery,
    useGetProductDetailQuery,
    usePostProductMutation,
} = partsApi;
