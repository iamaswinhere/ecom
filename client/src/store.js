import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice';
import productReducer from './slices/productSlice';


const store = configureStore({
  reducer: {
    userLogin: userReducer,
    cart: cartReducer,
    productList: productReducer,
  },
});

export default store;