import React from 'react';
import { Given, When, Then } from '@cucumber/cucumber';
import { render, screen, waitFor, fireEvent, cleanup } from '@testing-library/react'
import { Provider } from 'react-redux'
import expect from 'expect'

import { container, TOKENS } from '@/server/container'
import Pages from '../../pages'
import { store } from '@/store'


Given('the movie database has a movie with title {string}', async function (title) {
  const moviePersistentService = container.get(TOKENS.moviePersistentService)
  if (!moviePersistentService.addMovieItem) {
    throw new Error('moviePersistentService is undefined');
  }
  await moviePersistentService.addMovieItem({
    adult: false,
    backdrop_path: null,
    genre_ids: [],
    id: title,
    original_language: "en",
    original_title: title,
    overview: title,
    poster_path: "/path/to/image.jpg",
    popularity: 20,
    release_date: "2020-02-02",
    title,
    video: false,
    vote_average: 0,
    vote_count: 0
  })
});

When('the user search for {string}', async function (title) {
  render(<Provider store={store}><Pages /></Provider >)
  fireEvent.change(screen.getByLabelText('Search'), { target: { value: title } })
  const movieService = container.get(TOKENS.movieService)
  await movieService.searchMovie(title, 1)

});

Then('the user see the movie with title {string}', async function (title) {
  await waitFor(() => {
    screen.getByText(title)
  }, { timeout: 5000 });
});

Then('the administrator see {int} for cache count', async function (cacheCount) {
  const cacheService = container.get(TOKENS.cacheService)
  const result = await cacheService.get('__cache_count__')
  expect(result).toBe(cacheCount)
});

When('the user step to page {int}', async function (page) {
  const nextPageButton = screen.getByLabelText('Go to next page', { exact: false });

  fireEvent.click(nextPageButton)
});