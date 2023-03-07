import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTags } from "./tagsApi";

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchTagsThunk = createAsyncThunk(
  "tags/fetchTagsThunk",
  async () => {
    const tags = await fetchTags();
    return tags;
  }
);

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTagsThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTagsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.tags = action.payload;
      })
      .addCase(fetchTagsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default tagsSlice.reducer;
