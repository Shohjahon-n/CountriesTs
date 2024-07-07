import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import dataSlice from "./reducers/dataSlice";
import loadingSlice from "./reducers/loadingSlice";
import errorSlice from "./reducers/errorSlice";
import inputSlice from "./reducers/inputSlice";
import regionSlice from "./reducers/regionSclice";
export const store = configureStore({
    reducer: {
        user: userSlice,
        data: dataSlice,
        loading: loadingSlice,
        error: errorSlice,
        value: inputSlice,
        region: regionSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;