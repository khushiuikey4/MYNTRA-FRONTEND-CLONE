import { configureStore } from "@reduxjs/toolkit"
import bagProductReducer from "./productSlice"
import shopItemReducer from "./ShopItemSlice";
let productStore = configureStore({
    reducer: {
        bagProducts: bagProductReducer,
        shopProducts: shopItemReducer
    }
})
export default productStore;