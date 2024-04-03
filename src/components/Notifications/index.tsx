import { Snackbar } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeNotification } from '@/internals/movies/slice';
import { AppDispatch, RootState } from '@/store';

export default function Notifications () {
  const dispatch: AppDispatch = useDispatch()
  const isSourceNotificationOpen = useSelector((state: RootState) => state.movie.isSourceNotificationOpen)
  const isCached = useSelector((state: RootState) => state.movie.isCached)

  const handleNotificationClose = () => {
    dispatch(closeNotification())
  }

  return (
    <Snackbar
      open={isSourceNotificationOpen}
      autoHideDuration={6000}
      onClose={handleNotificationClose}
      message={"Data source: " + (isCached ? "Cache" : "API")}
    />
  );
}