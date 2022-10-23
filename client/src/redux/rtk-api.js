import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const partsApi = createApi({
    reducerPath: "partsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/",
        prepareHeaders: (headers, { getState }) => {
            const token = getState().main.token;
            if (token) {
                headers.set("x-access-token", `${token}`);
            }
            return headers;
        },
        tagTypes: ["Products", "User"],
    }),

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
        getUserDetail: builder.query({
            query: () => "getUserDetail",
            providesTags: ["User"],
        }),
        getCart: builder.query({
            query: () => "getCart",
            providesTags: ["User"],
        }),
        postProduct: builder.mutation({
            query: (data) => ({
                url: "postProduct",
                method: "post",
                body: data,
            }),
        }),
        postProductToCart: builder.mutation({
            query: (data) => ({
                url: "productToCart",
                method: "post",
                body: data,
            }),
            invalidatesTags: ["User"],
        }),
        deleteCartProduct: builder.mutation({
            query: (id) => ({
                url: `deleteCartProduct?id=${id}`,
                method: "delete",
            }),
            invalidatesTags: ["User"],
        }),
        clearCart: builder.mutation({
            query: (id) => ({
                url: `deleteCart?cartId=${id}`,
                method: "delete",
            }),
            invalidatesTags: ["User"],
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
    usePostProductToCartMutation,
    usePostUserMutation,
    useDeleteCartProductMutation,
    useClearCartMutation,
    useGetUserDetailQuery,
    useGetCartQuery,
} = partsApi;
