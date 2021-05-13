import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    email: null,
    age: "",
    phoneNo: "",
    gender: "",
    history: [],
    picture: null,
};

export const waiterServingsListSlice = createSlice({
    name: "Waiter Servings Slice",
    initialState: initialState,
    reducers: {
        addServingsToWaiterList: (state, action) => {
            state.history.unshift(action.payload);
        },
        saveUser: (state, action) => {
            state.name = action.payload.name;
            state.picture = action.payload.picture;
            state.email = action.payload.email;
        },
        saveAge: (state, action) => {
            state.age = action.payload;
        },
        savePhoneNo: (state, action) => {
            state.phoneNo = action.payload;
        },
        saveGender: (state, action) => {
            state.gender = action.payload;
        },
    },
});

export const {
    addServingsToWaiterList,
    saveAge,
    saveGender,
    savePhoneNo,
    saveUser,
} = waiterServingsListSlice.actions;

export default waiterServingsListSlice.reducer;
