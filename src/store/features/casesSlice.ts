import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Poster = {
    color: string
    format: string
    video?: string
    image: {
        src: string
        src2x?: string
        tablet?: string
        mobile?: string
    }
}

type Case = {
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
        setCases: (state, action: PayloadAction<CasesState>) => {
            state.items = action.payload.items
            state.total = action.payload.total
            state.page = action.payload.page
        },
        incrementPage: (state) => {
            state.page += 1
        }
    }
})

export const { setCases, incrementPage } = casesSlice.actions
export default casesSlice.reducer
