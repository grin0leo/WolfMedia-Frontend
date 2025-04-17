import { useDispatch } from 'react-redux'
import { setCases, setLoading, setError } from '@/store/features/casesSlice'
import { fetchCasesServer } from '@/shared/api/fetchCasesServer'
import type { Case } from '@/store/features/casesSlice'

export const useLoadMore = (initialItems: Case[], total: number, page: number) => {
    const dispatch = useDispatch()

    const loadMoreData = async () => {
        dispatch(setLoading(true))

        try {
            const { items: newItems } = await fetchCasesServer(page)
            dispatch(setCases({
                items: [...initialItems, ...newItems], // spret, добавляю новые элементы в список
                total,
                page: page + 1
            }))
        } catch (error) {
            dispatch(setError('Произошла ошибка при загрузке данных'))
        } finally {
            dispatch(setLoading(false))
        }
    }

    return {
        loadMoreData
    }
}
