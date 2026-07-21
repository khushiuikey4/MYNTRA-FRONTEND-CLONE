import { createSlice } from "@reduxjs/toolkit"
const BagProductSlice = createSlice({
    name: "bagProducts",
    initialState: { list: [] },
    reducers: {
        addItem: (state, action) => {
            state.list.push(action.payload); // add new item
        },
        removeItem: (state, action) => {
            state.list = state.list.filter((item, index) => item.id !== action.payload.id);
        }
    }
});
export const { addItem, removeItem } = BagProductSlice.actions;
export default BagProductSlice.reducer;