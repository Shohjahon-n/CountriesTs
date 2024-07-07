import { createSlice } from "@reduxjs/toolkit";
import { IData } from "../../interfaces/IData";
const initialState: IData = {
    data: [],
};

export const userSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload;
        },
    },
});

export const { setData } = userSlice.actions;
export default userSlice.reducer;