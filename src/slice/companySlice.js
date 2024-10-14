// src/features/companySlice.js
import { createSlice } from '@reduxjs/toolkit';

const companySlice = createSlice({
    name: 'companies',
    initialState: {
        companies: [],
    },
    reducers: {
        setCompanies: (state, action) => {
            state.companies = action.payload;
        },
    },
});

// Export the action to set companies
export const { setCompanies } = companySlice.actions;

// Export the selector to get companies
export const selectCompanies = (state) => state.companies.companies;

// Export the reducer
export default companySlice.reducer;
