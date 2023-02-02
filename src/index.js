import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './store/store.js';
import { Provider } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import Cart from './pages/Cart';
 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
    
      <App />
      
      </BrowserRouter>
      </Provider>
   </React.StrictMode>
);


reportWebVitals();
