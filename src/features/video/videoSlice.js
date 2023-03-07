import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchVideo } from "./videoApi";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideoThunk = createAsyncThunk(
  "video/fetchVideoThunk",
  async (id) => {
    const video = await fetchVideo(id);
    return video;
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideoThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchVideoThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.video = action.payload;
      })
      .addCase(fetchVideoThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
