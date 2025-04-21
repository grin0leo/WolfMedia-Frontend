'use client'

import { ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initFavorites } from '@/store/features/favoriteSlice'
import { Case } from '@/store/features/casesSlice'

export function FavoritesProvider({ children }: { children: ReactNode }) {
    const dispatch = useDispatch()

    useEffect(() => {
        try {
            const stored = localStorage.getItem('favorites')
            if (stored) {
                const parsed: Case[] = JSON.parse(stored)
                dispatch(initFavorites(parsed))
            }
        } catch (e) {
            console.error('Ошибка чтения favorites из localStorage:', e)
        }
    }, [dispatch])

    return <>{children}</>
}
