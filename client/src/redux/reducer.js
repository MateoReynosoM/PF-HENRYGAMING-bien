import { createReducer } from "@reduxjs/toolkit";
import { example } from "./actions";

const initialState = { example: null };

export const mainReducer = createReducer(initialState, (builder) => {
    builder.addCase(example, (state, { payload }) => {
        state.example = payload;
    });
});
