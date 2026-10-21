

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.jsx";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
