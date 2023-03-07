import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRelatedVideos } from "./relatedVideosApi";

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchRelatedVideosThunk = createAsyncThunk(
  "relatedVideos/fetchRelatedVideosThunk",
  async ({ id, tags }) => {
    const relatedVideos = await fetchRelatedVideos({ id, tags });
    return relatedVideos;
  }
);

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideosThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRelatedVideosThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideosThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
