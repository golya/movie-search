import React from 'react';

import Controlbar from '@/components/Controlbar';
import Loading from '@/components/Loading';
import MovieList from '@/components/MovieList';
import Notifications from '@/components/Notifications';
import Pagination from '@/components/Pagination';

export default function MoviePage () {
  return (
    <>
      <Loading />
      <Controlbar />
      <MovieList />
      <Pagination />
      <Notifications />
    </>
  );
}