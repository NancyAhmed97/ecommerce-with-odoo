import { createSlice } from "@reduxjs/toolkit";

export const favoritSlice = createSlice({
    name: "favorit",
    initialState: {
        count: 0,
        id: []
    },
    reducers: {
        favoritCount: (state, action) => {
            state.count = action.payload;
        },
        cartID: (state, action) => {
            state.id.push(action.payload);

        }
    },
});

export const { favoritCount } = favoritSlice.actions;
export const { favoritID } = favoritSlice.actions;

export default favoritSlice.reducer;
