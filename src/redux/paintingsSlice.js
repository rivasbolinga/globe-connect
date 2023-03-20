import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPaintings = createAsyncThunk(
  'paintings/fetchPaintings',
  async () => {
    const response = await fetch('https://api.artic.edu/api/v1/artworks')
    const data = await response.json()
    return data
  }
)

const paintingsSlice = createSlice({
  name: 'paintings',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPaintings.fulfilled, (state,action) => action.payload)
  }
});

export const selectPaintings = (state) => state.paintings;
export default paintingsSlice.reducer;