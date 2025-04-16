import { configureStore } from '@reduxjs/toolkit'
import casesReducer from './features/casesSlice'


export const createStore = () => {
    const store = configureStore({
        reducer: {
            cases: casesReducer
        }
    })
    return store
}

export type RootState = ReturnType<typeof createStore>['getState']
export type AppDispatch = ReturnType<typeof createStore>['dispatch']
