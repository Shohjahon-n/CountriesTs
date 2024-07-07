import { createSlice } from "@reduxjs/toolkit";
import { IError } from "../../interfaces/IError";

const initialState: IError = {
    error: ""
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setError(state, action) {
            state.error = action.payload.error
        },
    },
});

export const { setError } = userSlice.actions;
export default userSlice.reducer;