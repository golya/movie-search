import { MovieResult } from '@/internals/movies'


export const searchMovie = async (query: string, page: number): Promise<MovieResult> => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`
    }
  }


  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  const data = await response.json()
  return { ...data, isCached: false }
}
