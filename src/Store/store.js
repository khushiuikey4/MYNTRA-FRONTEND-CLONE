import { configureStore } from "@reduxjs/toolkit"
import bagProductReducer from "./productSlice"
let productStore = configureStore({
    reducer: {
        bagProducts: bagProductReducer
    }
})
export default productStore;