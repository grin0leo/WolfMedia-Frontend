'use client'

import styles from './StarButton.module.css'

export default function StarButton({
    isActive,
    toggleFav,
}: {
    isActive: boolean
    toggleFav: () => void
}) {
    return (
        <>
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <clipPath id="star-clip" clipPathUnits="objectBoundingBox">
                        <path d="
                            M0.5,0.05
                            L0.617,0.35
                            L0.95,0.35
                            L0.683,0.57
                            L0.79,0.9
                            L0.5,0.7
                            L0.21,0.9
                            L0.317,0.57
                            L0.05,0.35
                            L0.383,0.35
                            Z
                        " />
                    </clipPath>
                </defs>
            </svg>

            <button
                className={styles.wrapper}
                onClick={toggleFav}
                aria-label="Добавить в избранное"
            >
                <div className={styles.starWrapper}>
                    <div className={styles.starOutline} />
                    <div className={`${styles.starFill} ${!isActive ? styles.active : ''}`} />

                </div>
            </button>
        </>
    )
}
