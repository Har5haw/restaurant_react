import { configureStore } from "@reduxjs/toolkit";
import tableListSlice from "../features/tableList/index";
import popupDataSlice from "../features/popupData/index";
import itemsListData from "../features/itemList/index";

export const store = configureStore({
    reducer: {
        tableList: tableListSlice,
        popupData: popupDataSlice,
        itemsList: itemsListData,
    },
});
