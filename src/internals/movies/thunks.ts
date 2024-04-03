import { createAsyncThunk } from "@reduxjs/toolkit";

import { container, TOKENS } from '@/container'
import { MovieResult } from '@/internals/movies'


export const fetchMovieItems = createAsyncThunk(
  'movie/search',
  async (data: { page: number, query: string }): Promise<MovieResult> => {
    const moviePersistentService = container.get(TOKENS.moviePersistentService)
    return moviePersistentService.searchMovie(data.query, data.page)
  }
)