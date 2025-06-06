import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Case } from './casesSlice'

type FavoritesState = {
    cases: Case[]
}

const initialState: FavoritesState = {
    cases: []
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<Case>) => {
            const exists = state.cases.find((item) => item.id === action.payload.id)
            if (!exists) {
                state.cases.push(action.payload)
            } else {
                state.cases = state.cases.filter((item) => item.id !== action.payload.id)
            }
            try {
                localStorage.setItem('favorites', JSON.stringify(state.cases))
            } catch (e) {
                console.error('Ошибка сохранения favorites в localStorage:', e)
            }
        },
        initFavorites: (state, action: PayloadAction<Case[]>) => {
            state.cases = action.payload
        }
    }
})

export const { toggleFavorite, initFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
