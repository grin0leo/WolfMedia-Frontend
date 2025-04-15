'use client'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import styles from './page.module.css'

import type { RootState, AppDispatch } from '@/store/store'
import { fetchCases, incrementPage } from '@/store/features/casesSlice'
import { Case } from '@/components/Case'


export default function CasesPage() {
    const dispatch = useDispatch<AppDispatch>()
    // TODO вынести Page в отдельную ответвенность
    // TODO ОТПИСАТЬ ОТ СОСТОЯНИЙ И РЕАЛЕЗОВАТЬ ISR ВАЖНО  REVALIDAT
    const { items, loading, error, page, total } = useSelector((state: RootState) => state.cases)

    useEffect(() => {
        dispatch(fetchCases(page))
    }, [page])


    // при клике на кнопку page + 1
    // не вызываю здесь fetchCases тк обновление страницы это async и выполняется не сразу
    // поэтому я использую useEffect, который при обновленни page автоматически сделает запрос
    const handlemore = () => {
        if (items.length < total) (
            dispatch(incrementPage())
        )
    }


    return (
        <main className={styles.page}>

            <div className={styles.casesList}>
                <h2>Кейсы</h2>

                {loading && <p>Загрузка...</p>}

                {error && <p>{error}</p>}

                {items.map((item) => (
                    <Case
                        key={item.id}
                        tags={item.tags}
                        title={item.title}
                        imgSrc={item.poster.image.src}
                    />
                ))}

            </div>
            {items.length < total && (
                <button onClick={handlemore} disabled={loading}>
                    {loading ? 'Загрузка...' : 'Показать ещё'}
                </button>
            )}

        </main>

    )
}