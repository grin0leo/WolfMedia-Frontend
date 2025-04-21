import { configureStore } from '@reduxjs/toolkit'
import casesReducer from './features/casesSlice'
import favoriteReducer from './features/favoriteSlice'

export const store = configureStore({
    reducer: {
        cases: casesReducer,
        fav: favoriteReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
