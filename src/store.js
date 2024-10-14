// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './slice/companySlice';

const store = configureStore({
    reducer: {
        companies: companyReducer,
    },
});

export default store;
