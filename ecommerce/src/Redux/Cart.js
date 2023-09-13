import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        count: 0,
        id: [],
        quantity:0
    },
    reducers: {
        cartCount: (state, action) => {
            state.count = action.payload;
        },
        cartID: (state, action) => {
            state.id.push(action.payload);

        },
        addProduct: (state, action) => {
            state.quantity =action.payload;
          },
    },
});

export const { cartCount } = cartSlice.actions;
export const { cartID } = cartSlice.actions;
export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
