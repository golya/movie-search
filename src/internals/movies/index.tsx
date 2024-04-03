import { container, TOKENS } from '@/server/container'

export interface MovieItem {
  id: string;
  title: string;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieResult {
  page: number;
  results: MovieItem[];
  total_pages: number;
  total_results: number;
  isCached: boolean;
}

export interface MovieServiceType {
  searchMovie: (query: string, page: number) => Promise<MovieResult>
}

export const movieService = (): MovieServiceType => {
  return Object.freeze({
    searchMovie: async (query: string, page: number): Promise<MovieResult> => {
      const moviePersistentService = container.get(TOKENS.moviePersistentService)
      const cacheService = container.get(TOKENS.cacheService)
      const cacheKey = `__search__${query}__${page}__`

      const cacheValue = await cacheService.get(cacheKey)

      if (cacheValue) {
        await cacheService.increment(`__cache_count__`, 1)
        const result = JSON.parse(cacheValue.toString())
        return { ...result, isCached: true }
      }

      const data = await moviePersistentService.searchMovie(query, page)
      await cacheService.set(cacheKey, JSON.stringify(data))
      return data
    }
  })
}
