import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "",
};

export const valueSlice = createSlice({
    name: "value",
    initialState,
    reducers: {
        setValue(state, action) {
            state.value = action.payload;
        },
    },
});

export const { setValue } = valueSlice.actions;
export default valueSlice.reducer;