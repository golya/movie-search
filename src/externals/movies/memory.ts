import { MoviePersistentServiceType } from '@/externals/movies/api'

import { MovieItem, MovieResult } from '@/internals/movies'

let movies: MovieItem[] = []
export const memoryMoviePersistentService = (): MoviePersistentServiceType => {
  return Object.freeze({
    addMovieItem: async (newMovieItem: MovieItem): Promise<void> => {
      movies.push(newMovieItem)
    },
    searchMovie: async (query: string, page: number): Promise<MovieResult> => {
      const foundMovies = movies.filter(movie => movie.title.includes(query))
      return {
        results: [foundMovies[page - 1]],
        page: page,
        total_pages: movies.length,
        total_results: movies.length,
        isCached: false
      }
    },
    reset: () => {
      movies = []
    }
  })
}