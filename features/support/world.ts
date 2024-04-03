import { Before } from '@cucumber/cucumber';
import { cleanup } from '@testing-library/react'

import { container, TOKENS } from '@/server/container'

Before(async function () {
  const moviePersistentService = container.get(TOKENS.moviePersistentService)
  const cacheService = container.get(TOKENS.cacheService)

  if (!moviePersistentService.reset) {
    throw new Error('moviePersistentService is undefined');
  }

  await moviePersistentService.reset();
  await cacheService.reset();
  cleanup()
});