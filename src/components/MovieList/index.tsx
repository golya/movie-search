import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import MovieItem from '@/components/MovieItem';
import { RootState } from '@/store';

export default function MovieList () {
  const movieItems = useSelector((state: RootState) => state.movie.movieItems)

  return (
    <Grid container direction="row" columns={{ xs: 1, md: 10 }}>
      {movieItems.length > 0 &&
        movieItems.map((movieItem) => (
          <MovieItem
            key={movieItem.id}
            movieItem={movieItem}
          />
        ))}
    </Grid>
  );
}