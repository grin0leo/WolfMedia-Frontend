import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Poster = {
    image: {
        src: string
        src2x?: string
        tablet?: string
        mobile?: string
    }
}

export type Case = {
    id: string
    title: string
    tags: string
    poster: Poster
}

type CasesState = {
    items: Case[]
    loading: boolean
    error: string | null
    page: number
    total: number
}

const initialState: CasesState = {
    items: [],
    loading: false,
    error: null,
    page: 1,
    total: 0,
}

const casesSlice = createSlice({
    name: 'cases',
    initialState,
    reducers: {
        setCases: (state, action) => {
            state.items = action.payload.items
            state.total = action.payload.total
            state.page = action.payload.page
        },
        incrementPage: (state) => {
            state.page += 1
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
        }
        //  setFavorite(state) => {
        //     state
        // }
    }
})

export const { setCases, incrementPage, setLoading, setError } = casesSlice.actions
export default casesSlice.reducer
