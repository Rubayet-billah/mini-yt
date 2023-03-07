import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  searchKey: "",
};

const videoSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    selectTag: (state, action) => {
      state.tags.push(action.payload);
    },
    removeTag: (state, action) => {
      state.tags = state.tags.filter((tag) => tag !== action.payload);
    },
    searchText: (state, action) => {
      state.searchKey = action.payload;
    },
  },
});

export const { selectTag, removeTag, searchText } = videoSlice.actions;
export default videoSlice.reducer;
