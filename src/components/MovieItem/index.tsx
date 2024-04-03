import React from 'react';
import { Grid, Typography, CardMedia } from '@mui/material';
import { Card, CardContent } from '@mui/material';

import { MovieItem } from '@/internals/movies'

interface MovieItemProps {
  movieItem: MovieItem,
}

export default function MovieItemComponent ({ movieItem }: MovieItemProps): JSX.Element {

  return (
    <Grid item xs={2} key={movieItem.id} >
      <Card sx={{ margin: 1, minWidth: '200px', maxWidth: '200px' }}>
        {movieItem.poster_path === null && <CardMedia
          component="img"
          image="https://fakeimg.pl/200x300/000000/666666?text=🚫"
          alt={movieItem.title}
        />
        }
        {movieItem.poster_path !== null &&
          <CardMedia
            component="img"
            sx={{ minHeight: '300px' }}
            image={`https://image.tmdb.org/t/p/w200${movieItem.poster_path}`}
            alt={movieItem.title}
          />
        }
        <CardContent sx={{ minWidth: '200px', minHeight: '150px', maxHeight: '150px' }} >
          <Typography variant="body2" component="div">
            {movieItem.title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}