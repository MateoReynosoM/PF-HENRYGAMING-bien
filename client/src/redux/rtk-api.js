import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
/* import dotenv from "dotenv";
dotenv.config() */

export const partsApi = createApi({
    reducerPath: "partsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API || "http://localhost:3001/",
        prepareHeaders: (headers, { getState }) => {
            const token = sessionStorage.getItem("token");
            if (token) {
                headers.set("x-access-token", `${token}`);
            }
            return headers;
        },
        tagTypes: ["Product", "User", "Address", "Cart", "Review", "Favorite"],
    }),

    endpoints: (builder) => ({
        getPurchaseHistory: builder.query({
            query: () => "purchaseHistory",
        }),
        getAllProducts: builder.query({
            query: () => `productModel`,
            providesTags: ["Product"],
        }),
        getFeaturedProducts: builder.query({
            query: () => `featuredProduct`,
            providesTags: ["Product"],
        }),
        getBrands: builder.query({
            query: () => `allBrand`,
        }),
        getCategories: builder.query({
            query: () => `allType`,
        }),
        getBrandsByType: builder.query({
            query: (type) => `typeBrand/${type}`,
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
            providesTags: ["Review"],
        }),
        login: builder.query({
            query: (data) =>
                `verifyLogin?email=${data.email}&password=${data.password}`,
        }),
        getPaymentLink: builder.query({
            query: () => "payment",
        }),
        getUserDetail: builder.query({
            query: () => "getUserDetail",
            providesTags: ["User"],
        }),
        getCart: builder.query({
            query: () => "getCart",
            providesTags: ["Cart"],
        }),
        getAllAddresses: builder.query({
            query: () => "allAdresses",
            providesTags: ["Address"],
        }),
        postProduct: builder.mutation({
            query: (data) => ({
                url: "postProduct",
                method: "post",
                body: data,
            }),
            invalidatesTags: ["Product"],
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
                url: `updateProduct`,
                method: "put",
                body: data,
            }),
            invalidatesTags: ["Product"],
        }),
        postProductToCart: builder.mutation({
            query: (data) => ({
                url: "productToCart",
                method: "post",
                body: data,
            }),
            invalidatesTags: ["Cart"],
        }),
        deleteCartProduct: builder.mutation({
            query: (id) => ({
                url: `deleteCartProduct?id=${id}`,
                method: "delete",
            }),
            invalidatesTags: ["Cart"],
        }),
        clearCart: builder.mutation({
            query: (id) => ({
                url: `deleteCart?cartId=${id}`,
                method: "delete",
            }),
            invalidatesTags: ["Cart"],
        }),
        postUser: builder.mutation({
            query: (data) => ({
                url: "postUser",
                method: "post",
                body: data,
            }),
            invalidatesTags: ["User"],
        }),
        deleteAddress: builder.mutation({
            query: (data) => ({
                url: `deleteUserAdress?adressId=${data}`,
                method: "delete",
            }),
            invalidatesTags: ["Address"],
        }),
        postAdress: builder.mutation({
            query: (data) => ({
                url: "postUserAdress",
                method: "post",
                body: data,
            }),
            invalidatesTags: ["Address"],
        }),
        postReview: builder.mutation({
            query: (data) => ({
                url: "addReview",
                method: "post",
                body: data,
            }),
            invalidatesTags: ["Review"],
        }),
        postFav: builder.mutation({
            query: (data) => ({
                url: `postFav?idProduct=${data}`,
                method: "post",
            }),
            invalidatesTags: ["Favorite"],
        }),
        deleteFavProduct: builder.mutation({
            query: (data) => ({
                url: `deleteFavProduct?id=${data}`,
                method: "delete",
            }),
            invalidatesTags: ["Favorite"],
        }),
        getFavorites: builder.query({
            query: () => "getFavorites",
            providesTags: ["Favorite"],
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: "updateUser",
                method: "put",
                body: data,
            }),
            invalidatesTags: ["User"],
        }),
        postPurchase: builder.mutation({
            query: (data) => ({
                url: "paymentDetail",
                method: "post",
                body: data,
            }),
        }),
        banUser: builder.mutation({
            query: (data) => ({
                url: `banUser?userId=${data}`,
                method: "delete",
            }),
            invalidatesTags: ["User"],
        }),
        unbanUser: builder.mutation({
            query: (data) => ({
                url: `unbanUser?userId=${data}`,
                method: "delete",
            }),
            invalidatesTags: ["User"],
        }),
        deactivateProduct: builder.mutation({
            query: (data) => ({
                url: `/doNotShowProduct?productId=${data}`,
                method: "delete",
            }),
            invalidatesTags: ["Product"],
        }),
        reactivateProduct: builder.mutation({
            query: (data) => ({
                url: `/showProduct?productId=${data}`,
                method: "delete",
            }),
            invalidatesTags: ["Product"],
        }),
        switchAdmin: builder.mutation({
            query: (data) => ({
                url: `switchAdmin?userId=${data}`,
                method: "put",
            }),
            invalidatesTags: ["User"],
        }),
        getUsers: builder.query({
            query: () => "getUser",
            providesTags: ["User"],
        }),
        verifyAdmin: builder.query({
            query: () => "verifyAdmin",
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
    useGetAllAddressesQuery,
    useGetCartQuery,
    useLazyGetCartQuery,
    usePostAdressMutation,
    useDeleteAddressMutation,
    usePostReviewMutation,
    useLazyGetBrandsByTypeQuery,
    useUpdateUserMutation,
    useLazyGetPaymentLinkQuery,
    usePostPurchaseMutation,
    useLazyGetPurchaseHistoryQuery,
    usePostFavMutation,
    useGetFavoritesQuery,
    useLazyGetFavoritesQuery,
    useDeleteFavProductMutation,
    useGetUsersQuery,
    useLazyVerifyAdminQuery,
    useBanUserMutation,
    useUnbanUserMutation,
    useSwitchAdminMutation,
    useDeactivateProductMutation,
    useReactivateProductMutation,
} = partsApi;

/* router.use("/getFavorites", getFavorites);
router.use("/deleteFavProduct", deleteFavProduct);
router.use("/deleteAllFavs", deleteAllFavs);
router.use("/postFav", postFav); */
