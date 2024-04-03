import { searchMovie } from './api/searchMovie'
import { MovieItem, MovieResult } from '@/internals/movies'

export interface MoviePersistentServiceType {
  addMovieItem: (newMovieItem: MovieItem) => Promise<void>
  reset: () => void
  searchMovie: (query: string, page: number) => Promise<MovieResult>
}

export const moviePersistentService = (): MoviePersistentServiceType => {
  return Object.freeze({
    addMovieItem: async (newMovieItem: MovieItem): Promise<void> => { },
    reset: () => { },
    searchMovie
  })
}
