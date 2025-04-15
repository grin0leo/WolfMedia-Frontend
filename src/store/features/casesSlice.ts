import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


type Poster = {
    color: string;
    format: string;
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
    items: Case[];
    loading: boolean;
    error: string | null;
    page: number;
    total: number;
}

const initialState: CasesState = {
    items: [],
    loading: false,
    error: null,
    page: 1,
    total: 0,
}

export const fetchCases = createAsyncThunk(
    'cases/fetchCases',
    async (page: number) => {
        const limit = 10; // количество страниц в одном запросе
        const offset = (page - 1) * limit; // уже подтянутые страницы

        const res = await axios.get(`https://api.cms.chulakov.dev/page/work`, {
            params: {
                limit: limit,
                offset: offset,
            },
        });
        return {
            // ТИПИЗИРОВАТЬ ITEM
            items: res.data.items.map((item: any) => ({
                id: item.slug,
                title: item.title,
                tags: item.tagsDisplayed,
                poster: item.poster
            })),
            total: res.data.total
        }
    }
)


export const casesSlice = createSlice({
    name: 'cases',
    initialState,
    // синхронные действия
    reducers: {
        incrementPage: (state) => {
            state.page += 1;
        },
    },
    // обработка асинхронных действий
    extraReducers: (builder) => {
        builder
            // загрузка
            .addCase(fetchCases.pending, (state) => {
                state.loading = true
                state.error = null
            })
            // удачная попытка
            .addCase(fetchCases.fulfilled, (state, action) => {
                state.loading = false
                state.items.push(...action.payload.items)
                state.total = action.payload.total
            })
            // ошибка
            .addCase(fetchCases.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Ошибка загрузки'
            })
    }
})
export const { incrementPage } = casesSlice.actions
export default casesSlice.reducer