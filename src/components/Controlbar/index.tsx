import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage, setCurrentQuery } from '@/internals/movies/slice';
import { AppDispatch, RootState } from '@/store';

export default function Controlbar () {
  const dispatch: AppDispatch = useDispatch()
  const currentQuery = useSelector((state: RootState) => state.movie.currentQuery)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentQuery(event.target.value))
    if (event.target.value.length > 2) {
      dispatch(setCurrentPage(1))
      dispatch({ type: 'FETCH_MOVIES', payload: { query: event.target.value, page: 1 } })
    }
  }

  const onClick = () => {
    dispatch(setCurrentPage(1))
    dispatch({ type: 'FETCH_MOVIES', payload: { query: currentQuery, page: 1 } })
  }

  return (
    <Grid container p={1} spacing={2}>
      <Grid item xs={10}>
        <TextField id="search" fullWidth label="Search" variant="standard" onChange={onChange} />
      </Grid>
      <Grid item xs={2} alignContent="center">
        <Button fullWidth variant="contained" onClick={onClick}>Search</Button>
      </Grid>
    </Grid>
  );
}