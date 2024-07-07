import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/IUser";

const initialState: IUser = {
    id: 0,
    email: "",
    password: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;