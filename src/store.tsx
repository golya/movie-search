import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import movieSlice from '@/internals/movies/slice'
import { movieSaga } from '@/internals/movies/sagas'


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    movie: movieSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(movieSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
