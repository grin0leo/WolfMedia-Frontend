'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { initFavorites } from '@/store/features/favoriteSlice'
import { Case } from '@/store/features/casesSlice'

export function FavoritesProvider({ children }: { children: ReactNode }) {
    const dispatch = useDispatch()
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        try {
            const stored = localStorage.getItem('favorites')
            if (stored) {
                const parsed: Case[] = JSON.parse(stored)
                dispatch(initFavorites(parsed))
            }
        } catch (e) {
            console.error('Ошибка чтения favorites из localStorage:', e)
        } finally {
            setIsReady(true)
        }
    }, [dispatch])


    if (!isReady) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div className="loader" />
                Загрузка...
            </div>
        )
    }

    return <>{children}</>
}
