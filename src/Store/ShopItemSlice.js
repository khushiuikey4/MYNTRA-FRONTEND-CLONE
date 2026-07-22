import { createSlice } from "@reduxjs/toolkit";


const shopItemSlice = createSlice({
    name: "shopItems",
    initialState: {
        shopList: []
    },
    reducers: {
        addAllItems: (state, action) => {
            state.shopList = action.payload;
        }
    }
});
export const { addAllItems } = shopItemSlice.actions;
export default shopItemSlice.reducer;