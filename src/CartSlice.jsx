
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",

    initialState: {
        items: [],
    },

    reducers: {
        // Required reducer: Add a plant to the cart
        addItem: (state, action) => {
            const product = action.payload;

            const existing = state.items.find(
                (item) => item.id === product.id
            );

            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({
                    ...product,
                    quantity: 1,
                });
            }
        },

        // Required reducer: Remove a plant from the cart
        removeItem: (state, action) => {
            const id = action.payload;

            state.items = state.items.filter(
                (item) => item.id !== id
            );
        },

        // Required reducer: Update a plant's quantity
        // Payload format: { id: plantId, change: 1 } or { id: plantId, change: -1 }
        updateQuantity: (state, action) => {
            const { id, change } = action.payload;

            const item = state.items.find(
                (product) => product.id === id
            );

            if (!item) return;

            item.quantity += change;

            if (item.quantity <= 0) {
                state.items = state.items.filter(
                    (product) => product.id !== id
                );
            }
        },

        // Compatibility actions for your existing components
        addToCart: (state, action) => {
            const product = action.payload;

            const existing = state.items.find(
                (item) => item.id === product.id
            );

            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({
                    ...product,
                    quantity: 1,
                });
            }
        },

        increaseQuantity: (state, action) => {
            const item = state.items.find(
                (product) => product.id === action.payload
            );

            if (item) {
                item.quantity += 1;
            }
        },

        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find(
                (product) => product.id === id
            );

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.items = state.items.filter(
                    (product) => product.id !== id
                );
            }
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const {
    addItem,
    removeItem,
    updateQuantity,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartCount = (state) =>
    state.cart.items.reduce(
        (total, item) => total + item.quantity,
        0
    );

export const selectCartTotal = (state) =>
    state.cart.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

export default cartSlice.reducer;
