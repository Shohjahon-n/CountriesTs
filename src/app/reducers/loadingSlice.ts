import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
    },
});

export const { setLoading } = userSlice.actions;
export default userSlice.reducer;