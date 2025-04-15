import { configureStore } from '@reduxjs/toolkit'
import casesReducer from './features/casesSlice'

export const store = configureStore({
    reducer: {
        cases: casesReducer,
    },
})

// TODO УЗНАТЬ ЧТО ЭТО
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch