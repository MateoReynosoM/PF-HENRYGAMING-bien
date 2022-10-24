import { createReducer } from "@reduxjs/toolkit";
import {
    saveFilteredData,
    displayFilters,
    notFound,
    hasFiltered,
    sorting,
    saveSearchedData,
    reset,
    setToken,
    deleteToken,
} from "./actions";
import { filterFunction } from "../utils/filterFunction";

const initialState = {
    searchedData: [],
    filteredCards: [],
    filterType: [],
    filterBrand: [],
    filterPrice: [],
    sorting: "",
    token: null,
    notFound: false,
    hasFiltered: false,
};

export const mainReducer = createReducer(initialState, (builder) => {
    builder.addCase(displayFilters, (state, { payload }) => {
        state.filteredCards = filterFunction([
            state.filterType,
            state.filterBrand,
            state.filterPrice,
            state.searchedData,
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
    builder.addCase(hasFiltered, (state) => {
        state.hasFiltered = true;
    });
    builder.addCase(sorting, (state, { payload }) => {
        state.sorting = payload;
    });
    builder.addCase(saveSearchedData, (state, { payload }) => {
        state.searchedData = payload;
    });
    builder.addCase(setToken, (state, { payload }) => {
        state.token = payload;
    });
    builder.addCase(deleteToken, (state, { payload }) => {
        state.token = null;
    });
    builder.addCase(reset, (state, { payload }) => {
        state.searchedData = [];
        state.filteredCards = [];
        state.filterType = [];
        state.filterBrand = [];
        state.filterPrice = [];
        state.sorting = "";
        state.notFound = false;
        state.hasFiltered = false;
    });
});
