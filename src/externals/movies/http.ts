import { searchMovie } from './http/searchMovie'
import { MoviePersistentServiceType } from '@/externals/movies/api'
import { MovieItem } from '@/internals/movies'

export const movieHttpService = (): MoviePersistentServiceType => {
  return Object.freeze({
    addMovieItem: async (newMovieItem: MovieItem): Promise<void> => { },
    reset: () => { },
    searchMovie,
  })
}