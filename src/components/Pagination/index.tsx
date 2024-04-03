import { Grid, Pagination } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage } from '@/internals/movies/slice';
import { AppDispatch, RootState } from '@/store';

export default function PaginationComponent () {
  const dispatch: AppDispatch = useDispatch()
  const movieData = useSelector((state: RootState) => state.movie)
  const movieItems = useSelector((state: RootState) => state.movie.movieItems)


  const handlePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPage(value))
    dispatch({ type: 'FETCH_MOVIES', payload: { query: movieData.currentQuery, page: value } })
  }

  return (
    <>
      {movieItems.length > 0 &&
        <Grid container justifyContent="center" alignItems="center" direction="column" >
          <Grid item sx={{ margin: 3 }}>
            <Pagination count={movieData.totalPages} color="primary" onChange={handlePagination} />
          </Grid>
        </Grid>
      }
    </>
  );
}