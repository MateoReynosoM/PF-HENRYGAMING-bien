import { createAction } from "@reduxjs/toolkit";
export const displayFilters = createAction("displayFilters");
export const saveFilteredData = createAction("saveFilteredData");
export const notFound = createAction("notFound");
export const hasFiltered = createAction("hasFiltered");
export const sorting = createAction("sorting");
