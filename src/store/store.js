import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../store/authSlice'
import {createStore}from 'react-redux'
import cartReducer, { getTotals } from './cartSlice';
import productsReducer, {productsFetch} from './productsSlice';
import { productsApi } from '../http/ToysApi';

 
export const store = configureStore({
    reducer:{
        auth: authSlice,
        cart: cartReducer,
        products: productsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
      
    
    },
    middleware: (getDefaultMiddleware)=>
     getDefaultMiddleware().concat(productsApi.middleware),
    
});
store.dispatch(productsFetch());
store.dispatch(getTotals());


