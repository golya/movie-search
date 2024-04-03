import { Container, token } from 'brandi'

import { type MoviePersistentServiceType } from '@/externals/movies/api'
import { memoryMoviePersistentService } from '@/externals/movies/memory'
import { movieHttpService } from '@/externals/movies/http'

const isServer = process.env.MODE === 'server' || process.env.MODE === 'test'

if (!isServer) {
  process.env.MOVIE_SERVICE = 'http'
}

const movieServiceType = process.env.MOVIE_SERVICE

export const TOKENS = {
  moviePersistentService: token<MoviePersistentServiceType>('moviePersistentService')
}

export const container = new Container()

if (movieServiceType === 'memory' || movieServiceType === undefined) {
  container
    .bind(TOKENS.moviePersistentService)
    .toInstance(memoryMoviePersistentService)
    .inTransientScope()
} else {
  container.bind(TOKENS.moviePersistentService).toInstance(movieHttpService).inTransientScope()
}
