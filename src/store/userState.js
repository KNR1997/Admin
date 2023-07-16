import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    let cv = localStorage.getItem("cv");
    if (cv) {
      return JSON.parse(localStorage.getItem("cv"));
    } else {
      return [];
    }
};
  
const storeInLocalStorage = (data) => {
    localStorage.setItem("cv", JSON.stringify(data));
};

const initialState = {
    files: fetchFromLocalStorage()
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToFiles: (state, action) => {
            const isFileInCart = state.carts.find(
                (file) => file.fileID === action.payload.fileID
            );

            if (isFileInCart) {

            } else {
                state.files.push(action.payload);
                storeInLocalStorage(state.files);
            }
        }
    }
});

export default userSlice.reducer;