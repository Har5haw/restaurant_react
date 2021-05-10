import { configureStore } from "@reduxjs/toolkit";
import tableListSlice from "../features/tableList/tableListSlice";
import popupDataSlice from "../features/popupData/popupDataSlice";
import itemsListData from "../features/itemList/itemListSlice";

export const store = configureStore({
    reducer: {
        tableList: tableListSlice,
        popupData: popupDataSlice,
        itemsList: itemsListData,
    },
});
