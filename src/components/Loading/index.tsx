import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const LoadingComponent: React.FC = () => {

  const isListLoading = useSelector((state: RootState) => state.movie.isMovieLoading)

  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}
      open={isListLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default LoadingComponent;