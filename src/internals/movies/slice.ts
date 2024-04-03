import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchMovieItems } from '@/internals/movies/thunks';
import { MovieItem } from '@/internals/movies';

interface MovieState {
  isMovieLoading: boolean;
  isSourceNotificationOpen: boolean;
  isCached: boolean;
  movieItems: MovieItem[];
  totalPages: number;
  totalResults: number;
  currentPage: number;
  currentQuery: string;
}

const initialState: MovieState = {
  isMovieLoading: false,
  isSourceNotificationOpen: false,
  movieItems: [],
  isCached: false,
  totalPages: 0,
  totalResults: 0,
  currentPage: 1,
  currentQuery: ''
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    closeNotification: (state) => {
      state.isSourceNotificationOpen = false
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setCurrentQuery: (state, action: PayloadAction<string>) => {
      state.currentQuery = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovieItems.pending, (state) => {
      state.isMovieLoading = true
    })
    builder.addCase(fetchMovieItems.rejected, (state) => {
      state.isMovieLoading = false
    })
    builder.addCase(fetchMovieItems.fulfilled, (state, action) => {
      state.isMovieLoading = false
      state.isSourceNotificationOpen = true
      state.movieItems = action.payload.results
      state.isCached = action.payload.isCached
      state.totalPages = action.payload.total_pages
      state.totalResults = action.payload.total_results
    })
  }
});

export const { closeNotification, setCurrentPage, setCurrentQuery } = movieSlice.actions;

export default movieSlice.reducer;