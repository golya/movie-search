import { Container, token } from 'brandi'
import dotenv from 'dotenv';

import { type MoviePersistentServiceType, moviePersistentService } from '@/externals/movies/api'
import { memoryMoviePersistentService } from '@/externals/movies/memory'
import { type CacheType } from '@/externals/cache'
import { memoryCacheService } from '@/externals/cache/memory'
import { redisCacheService } from '@/externals/cache/redis'

import { MovieServiceType, movieService } from '@/internals/movies'
dotenv.config();

export const TOKENS = {
  moviePersistentService: token<MoviePersistentServiceType>('moviePersistentService'),
  movieService: token<MovieServiceType>('movieService'),
  cacheService: token<CacheType>('cacheService')
}

export const container = new Container()

const movieServiceType = process.env.MOVIE_SERVICE
const cacheServiceType = process.env.CACHE_SERVICE


if (movieServiceType === 'memory' || movieServiceType === undefined) {
  container
    .bind(TOKENS.moviePersistentService)
    .toInstance(memoryMoviePersistentService)
    .inTransientScope()
} else {
  container.bind(TOKENS.moviePersistentService).toInstance(moviePersistentService).inTransientScope()
}


if (cacheServiceType === 'memory' || cacheServiceType === undefined) {
  container
    .bind(TOKENS.cacheService)
    .toInstance(memoryCacheService)
    .inTransientScope()
} else {
  if (cacheServiceType === 'redis') {
    container
      .bind(TOKENS.cacheService)
      .toInstance(redisCacheService)
      .inTransientScope()
  }
}

container.bind(TOKENS.movieService).toInstance(movieService).inTransientScope()