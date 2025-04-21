'use client'

import clsx from 'clsx'
import styles from './loadMore.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { setCases } from '@/store/features/casesSlice'
import { RootState } from '@/store/store'

import { CasesList } from '../CasesList/CasesList'
import type { Case } from '@/store/features/casesSlice'
import { useLoadMore } from './useLoadMore'
import { useEffect } from 'react'

export function LoadMoreCases({
    initialItems,
    initialPage,
    total,
}: {
    initialItems: Case[]
    initialPage: number
    total: number
}) {

    const dispatch = useDispatch()


    const { items, loading, page, error } = useSelector((state: RootState) => state.cases)

    useEffect(() => {
        dispatch(setCases({ items: initialItems, total, page: initialPage }))
    }, [dispatch, initialItems, total, initialPage])

    const { loadMoreData } = useLoadMore(items, total, page)

    return (
        <>
            <CasesList items={items} />

            {error && (
                <div className={styles.error}>
                    Произошла ошибка! Попробуйте позже!
                </div>)}


            {(page - 1) * 10 < total && (
                <button onClick={loadMoreData} className={clsx(styles.button)} disabled={loading}>
                    {loading ? 'Загрузка...' : 'Показать ещё'}
                </button>
            )}
        </>
    )
}