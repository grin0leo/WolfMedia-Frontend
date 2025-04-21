import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// type FavoritesState = {
//     slugs: string[]
// }

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
export const { toggleFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
