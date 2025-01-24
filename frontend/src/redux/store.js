// Import the `configureStore` function from Redux Toolkit to create a Redux store
import { configureStore } from '@reduxjs/toolkit';

// Import the cart reducer, which manages the cart's state
import cartReducer from "./features/cart/cartSlice";

// Import the APIs created using RTK Query for handling books and orders
import booksApi from './features/books/booksApi';
import ordersApi from './features/orders/ordersApi';

// Export the configured Redux store
export default configureStore({
  // Define the slices of state (reducers) that the store will manage
  reducer: {
    // The `cart` slice of state is managed by `cartReducer`
    cart: cartReducer,

    // Dynamically set the reducer paths for the `booksApi` and `ordersApi`
    // Each API has a unique `reducerPath` property to identify its slice of state
    [booksApi.reducerPath]: booksApi.reducer, // State for `booksApi`
    [ordersApi.reducerPath]: ordersApi.reducer, // State for `ordersApi`
  },

  // Add custom middleware to the store
  middleware: getDefaultMiddleware =>
    // Start with the default middleware provided by Redux Toolkit
    getDefaultMiddleware()
      // Add the middleware for `booksApi` and `ordersApi` to handle API calls and caching
      .concat(
        booksApi.middleware, // Middleware for `booksApi` (RTK Query)
        ordersApi.middleware // Middleware for `ordersApi` (RTK Query)
      )
});
