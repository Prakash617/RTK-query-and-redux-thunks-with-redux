import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import { postApi } from '../services/post';
import userSlice from "./slices/UserSlice";
import postSlice from "./slices/PostSlice";
import productReducer from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  // reducerPath and reducer are created for us, which" we can pass straight into the reducer parameter of configureStore.
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    users: userSlice,
    posts: postSlice,
    product: productReducer,
    cart: cartSlice,
  },

  // middleware is also created for us, which will allow us to take advantage of caching, invalidation, polling, and the other features of RTK Query.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
})

// It will enable to refetch the data on certain events, such as refetchOnFocus and refetchOnReconnect.
setupListeners(store.dispatch)