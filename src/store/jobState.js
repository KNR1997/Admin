import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getJobs = createAsyncThunk(
    'jobs/getJobs',
    async () => {
        const response = await fetch('http://localhost:8080/api/jobs/getAllJobs');
        const formattedResponse = await response.json();
        return formattedResponse;
    }
);

export const jobSlice = createSlice({
    name: 'job',
    initialState: {
        jobs: [],
        isLoading: false,
    },
    extraReducers: {
        [getJobs.pending]: (state) => {
            state.isLoading = true;
        },
        [getJobs.fulfilled]: (state, action) => {
            state.jobs = action.payload;
            state.isLoading = false;
        },
        [getJobs.rejected]: (state) => {
            state.isLoading = false;
        }
    }
});

export default jobSlice.reducer;