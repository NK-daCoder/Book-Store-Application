import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./features/cart/cartSlice"

export default configureStore({
  reducer: {
    // cartReducer comes from features/cart.cartSlice.js
    cart: cartReducer,
  }
})