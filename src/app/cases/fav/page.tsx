'use client'

import { useEffect, useState } from 'react'
import styles from './fav.module.css'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { Case as CaseType } from "@/store/features/casesSlice"
import { Case } from "@/components/CasesPage/Case"
import { initFavorites } from '@/store/features/favoriteSlice'

export default function FavPage() {
    const dispatch = useDispatch()


    const [loaded, setLoaded] = useState(false)

    const favCases = useSelector((state: RootState) => state.fav.cases)

    // загружаю кейсы с куки в Стор 
    useEffect(() => {
        const cookie = Cookies.get('favorites')
        if (cookie) {
            try {
                const parsed = JSON.parse(cookie)
                dispatch(initFavorites(parsed))
            } catch (e) {
                console.error('Ошибка парсинга favorites куки:', e)
            }
        }
        setLoaded(true)
    }, [dispatch])

    if (!loaded) return (
        <main className={styles.container}>
            <div>Загрузка</div>
        </main>
    )

    return (
        <main className={styles.container}>
            <ul className={styles.column}>
                {favCases.map((el: CaseType, index) => (
                    <li key={index}>
                        <Case id={el.id} title={el.title} tags={el.tags} imgSrc={el.poster.image.src} fullCase={el} />
                    </li>
                ))}
            </ul>
        </main>
    )
}
