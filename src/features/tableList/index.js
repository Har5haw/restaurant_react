import { createSlice } from "@reduxjs/toolkit";

const initialState = require("../../data/tables.json");

export const tableListSlice = createSlice({
    name: "tableListSlice",
    initialState: initialState,
    reducers: {
        addItemToTable: (state, action) => {
            const index = action.payload.index;
            const item = action.payload.itemData;
            const [existItem] = state[index].items.filter(
                (ele) => ele.id === item.id
            );
            if (existItem) {
                existItem.servings++;
                state[index].totalPrice =
                    state[index].totalPrice + item.itemPrice;
                return;
            }
            state[index].totalItems += 1;
            state[index].items.push({ ...item, servings: 1 });
            state[index].totalPrice = state[index].totalPrice + item.itemPrice;
        },
        changeServings: (state, action) => {
            const servings = action.payload.servings;
            const itemIndex = action.payload.itemIndex;
            const tableIndex = action.payload.tableIndex;
            const table = state[tableIndex];

            if (servings > 0 && servings <= 1000) {
                table.totalPrice +=
                    (servings - table.items[itemIndex].servings) *
                    table.items[itemIndex].itemPrice;
                table.items[itemIndex].servings = servings;
                return;
            } else if (parseInt(servings) === 0) {
                tableListSlice.reducer(
                    state,
                    deleteItem({ itemIndex: itemIndex, tableIndex: tableIndex })
                );
            }
        },
        deleteItem: (state, action) => {
            const itemIndex = action.payload.itemIndex;
            const tableIndex = action.payload.tableIndex;
            const table = state[tableIndex];

            table.totalItems -= 1;
            table.totalPrice -=
                table.items[itemIndex].itemPrice *
                table.items[itemIndex].servings;
            table.items.splice(itemIndex, 1);
        },
    },
});

export const {
    addItemToTable,
    changeServings,
    deleteItem,
} = tableListSlice.actions;

export default tableListSlice.reducer;
