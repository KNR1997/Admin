import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCompanies = createAsyncThunk(
    'company/getCompanies',
    async () => {
        const response = await fetch('http://localhost:8080/api/company/getAllCompanies');
        const formattedResponse = await response.json();
        return formattedResponse;
    }
);

export const companySlice = createSlice({
    name: 'company',
    initialState: {
        companies: [],
        isLoading: false,
    },
    extraReducers: {
        [getCompanies.pending]: (state) => {
            state.isLoading = true;
        },
        [getCompanies.fulfilled]: (state, action) => {
            state.companies = action.payload;
            state.isLoading = false;
        },
        [getCompanies.rejected]: (state) => {
            state.isLoading = false;
        }
    }
});

export default companySlice.reducer;