import { configureStore } from "@reduxjs/toolkit";
import tableListSlice from "../features/tableList/tableListSlice";
import popupDataSlice from "../features/popupData/popupDataSlice";

export const store = configureStore({
    reducer: {
        tableList: tableListSlice,
        popupData: popupDataSlice,
    },
});
