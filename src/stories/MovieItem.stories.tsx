import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import MovieItem from '@/components/MovieItem';

const meta: Meta<typeof MovieItem> = {
  component: MovieItem,
};

export default meta;
type Story = StoryObj<typeof MovieItem>;

export const Primary: Story = {
  render: () => <MovieItem
    movieItem={{
      id: 'test',
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      original_language: "en",
      original_title: "The Lord of the Rings: The Fellowship of the Ring",
      overview: "test",
      poster_path: "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
      popularity: 20,
      release_date: "2020-02-02",
      title: "The Lord of the Rings: The Fellowship of the Ring",
      video: false,
      vote_average: 0,
      vote_count: 0
    }}
  />,
};
