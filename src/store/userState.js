import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserFiles = createAsyncThunk(
    'user/getFiles',
    async (userId) => {
        const response = await fetch(`http://localhost:8080/api/user/getFiles/${userId}`);
        const formattedResponse = await response.json();
        return formattedResponse;
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        files: [],
        isLoading: false,
    },
    extraReducers: {
        [getUserFiles.pending]: (state) => {
            state.isLoading = true;
        },
        [getUserFiles.fulfilled]: (state, action) => {
            state.files = action.payload;
            state.isLoading = false;
        },
        [getUserFiles.rejected]: (state) => {
            state.isLoading = false;
        }
    }
});
  

export default userSlice.reducer;