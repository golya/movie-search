import { MovieResult } from '@/internals/movies'

export const searchMovie = async (query: string, page: number): Promise<MovieResult> => {
  const response = await fetch(`http://localhost:5001/api/v1/movies?query=${query}&page=${page}`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}
