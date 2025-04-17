import { configureStore } from '@reduxjs/toolkit'
import casesReducer from './features/casesSlice'

export const store = configureStore({
    reducer: {
        cases: casesReducer
    }
})

// РАЗОБРАТЬСЯ 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
