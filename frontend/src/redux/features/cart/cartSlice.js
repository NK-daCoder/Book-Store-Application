import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: {
            // keeping our cart items in the array
            cartItems: [],
        },
        reducers: {
            addToCart: (state, action) => {
                // _id comes from the json
                const exsitingItem = state.cartItems.find(item => item._id === action.payload._id);
                if (!exsitingItem) {
                    state.cartItems.push(action.payload)
                    alert("Item added successfully");
                }
                else {
                    alert("Item exists");
                }
            },
            removeFromCart: (state, action) => {
                state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
            },
            clearFromCart: (state) => {
                state.cartItems = []
            }
        },
    }
)

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearFromCart } = cartSlice.actions

export default cartSlice.reducer