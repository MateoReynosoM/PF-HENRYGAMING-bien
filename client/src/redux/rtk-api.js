import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const partsApi = createApi({
    reducerPath: "partsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `productModel`,
        }),
        getFeaturedProducts: builder.query({
            query: () => `featuredProduct`,
        }),
        getBrands: builder.query({
            query: () => `allBrand`,
        }),
        getCategories: builder.query({
            query: () => `allType`,
        }),
        getProductsByModel: builder.query({
            query: (model) => `productModel?name=${model}`,
        }),
        getProductsFilterByPrice: builder.query({
            query: ([min, max]) => `productPrice?min=${min}&max=${max}`,
        }),
        getProductsFilterByBrand: builder.query({
            query: (brand) => `brand?brandId=${brand}`,
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
        login: builder.query({
            query: (data) =>
                `verifyLogin?email=${data.email}&password=${data.password}`,
        }),
        postProduct: builder.mutation({
            query: (data) => ({
                url: "postProduct",
                method: "post",
                body: data,
            }),
        }),
        postUser: builder.mutation({
            query: (data) => ({
                url: "postUser",
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
    useGetBrandsQuery,
    useGetCategoriesQuery,
    useGetFeaturedProductsQuery,
    useLazyGetProductsByModelQuery,
    useLazyGetProductsFilterByPriceQuery,
    useLazyGetProductsFilterByBrandQuery,
    useLazyGetProductsFilterByTypeQuery,
    useLazyGetCpusFilterByBrandQuery,
    useGetProductDetailQuery,
    useLazyLoginQuery,
    usePostProductMutation,
    usePostUserMutation,
} = partsApi;