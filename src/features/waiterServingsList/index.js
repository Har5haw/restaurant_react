import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const waiterServingsListSlice = createSlice({
    name: "Waiter Servings Slice",
    initialState: initialState,
    reducers: {
        addServingsToWaiterList: (state, action) => {
            state.unshift(action.payload);
            console.log(action.payload);
        },
    },
});

export const { addServingsToWaiterList } = waiterServingsListSlice.actions;

export default waiterServingsListSlice.reducer;
