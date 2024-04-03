
import { all, put, takeLatest } from 'redux-saga/effects'
import { fetchMovieItems } from '@/internals/movies/thunks';

interface FetchMovieItemsAction {
  type: string;
  payload: {
    page: number;
    query: string;
  }
}

function* watchFetchMovieItem () {
  yield takeLatest('FETCH_MOVIES', function* (action: FetchMovieItemsAction) {
    yield put(fetchMovieItems({ page: action.payload.page, query: action.payload.query }));
  });
}

export function* movieSaga () {
  yield all([
    watchFetchMovieItem(),
  ]);
}