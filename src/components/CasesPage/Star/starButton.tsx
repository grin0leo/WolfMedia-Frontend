'use client'

import { StarClipPath } from './starClipPath'
import styles from './StarButton.module.css'

export default function StarButton({ isActive, toggleFav }: { isActive: boolean, toggleFav: () => void }) {

    return (
        <>
            <StarClipPath />
            <button
                className={styles.wrapper}
                onClick={() => {
                    toggleFav()
                }}
                aria-label="Добавить в избранное"
            >
                <div
                    className={`${styles.star} ${isActive ? styles.filled : styles.outlined}`}
                />
            </button>
        </>
    )
}
