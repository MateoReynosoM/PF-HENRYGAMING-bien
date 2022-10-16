import { createReducer } from "@reduxjs/toolkit";
import {
    saveFilteredData,
    displayFilters,
    notFound,
    hasFiltered,
    sorting,
} from "./actions";
import { filterFunction } from "../utils/filterFunction";

const initialState = {
    filteredCards: [],
    filterType: [],
    filterBrand: [],
    filterPrice: [],
    sorting: "",
    notFound: false,
    hasFiltered: false,
};

export const mainReducer = createReducer(initialState, (builder) => {
    builder.addCase(displayFilters, (state, { payload }) => {
        state.filteredCards = filterFunction([
            state.filterType,
            state.filterBrand,
            state.filterPrice,
            state.sorting.length ? state.filteredCards : payload,
        ]);
    });
    builder.addCase(saveFilteredData, (state, { payload }) => {
        if (payload.name === "type") state.filterType = payload.filter;
        else if (payload.name === "brand") state.filterBrand = payload.filter;
        else if (payload.name === "price") state.filterPrice = payload.filter;
        else state = { ...state };
    });
    builder.addCase(notFound, (state, { payload }) => {
        state.notFound = payload;
    });
    builder.addCase(hasFiltered, (state) => {
        state.hasFiltered = true;
    });
    builder.addCase(sorting, (state, { payload }) => {
        state.sorting = payload;
    });
});
