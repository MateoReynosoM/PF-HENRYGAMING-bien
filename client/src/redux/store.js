import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { partsApi } from "./rtk-api";
import { mainReducer } from "./reducer";

export const store = configureStore({
    reducer: {
        [partsApi.reducerPath]: partsApi.reducer,
        main: mainReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(partsApi.middleware),
});

setupListeners(store.dispatch);
