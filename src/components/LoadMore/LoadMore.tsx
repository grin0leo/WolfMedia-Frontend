'use client'
import styles from './loadMore.module.css'
import { useState } from 'react'
import { CasesList } from '../CasesList/CasesList'
import { fetchCasesServer } from '@/shared/api/fetchCasesServer'
import clsx from 'clsx'

type CaseType = Parameters<typeof CasesList>[0]['items'][0]

export function LoadMoreCases({
    initialItems,
    initialPage,
    total,
}: {
    initialItems: CaseType[]
    initialPage: number
    total: number
}) {

    const [items, setItems] = useState<CaseType[]>(initialItems)
    const [page, setPage] = useState(initialPage)
    const [loading, setLoading] = useState(false)

    const handleLoadMore = async () => {
        setLoading(true)
        const { items: newItems } = await fetchCasesServer(page)
        setItems((prev) => [...prev, ...newItems])
        setPage((prev) => prev + 1)
        setLoading(false)
    }

    return (
        <>
            <CasesList items={items} />
            {items.length < total && (
                <button onClick={handleLoadMore} className={clsx(styles.button)} disabled={loading}>
                    {loading ? 'Загрузка...' : 'Показать ещё'}
                </button>
            )}
        </>
    )
}
