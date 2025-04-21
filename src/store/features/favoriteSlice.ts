import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type FavoritesState = {
    slugs: string[]
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        slugs: JSON.parse(localStorage.getItem('favorites') || '[]')
    },
    reducers: {
        toggleFavorites: (state, action: PayloadAction<string>) => {
            const index = state.slugs.indexOf(action.payload)
            if (index === -1) {
                state.slugs.push(action.payload)
            } else {
                state.slugs.splice(index, 1)
            }
            localStorage.setItem('favorites', JSON.stringify(state.slugs))
        }
    }
})
//Можно вынестиселекторы и потом просто передать их в useSelector
export const selectFavCases = (state: { favorites: FavoritesState }) => state.favorites.slugs
export const selectFavCasesCount = (state: { favorites: FavoritesState }) => state.favorites.slugs.length

export const { toggleFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
