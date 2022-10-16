import { createReducer } from "@reduxjs/toolkit";
import {
    saveFilteredData,
    displayFilters,
    notFound,
    hasFiltered,
} from "./actions";
import { filterFunction } from "../utils/filterFunction";

const initialState = {
    filteredCards: [],
    filterType: [],
    filterBrand: [],
    filterPrice: [],
    notFound: false,
    hasFiltered: false,
};

export const mainReducer = createReducer(initialState, (builder) => {
    builder.addCase(displayFilters, (state, { payload }) => {
        state.filteredCards = filterFunction([
            state.filterType,
            state.filterBrand,
            state.filterPrice,
            payload,
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
    builder.addCase(hasFiltered, (state, { payload }) => {
        state.hasFiltered = true;
    });
});
