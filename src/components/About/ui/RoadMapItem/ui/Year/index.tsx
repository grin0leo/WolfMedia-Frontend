import styles from './year.module.css'


export function YearBlock({ year }: { year: number | string }) {

    return (
        <div className={styles.element}>
            <span className={styles.year}>{year}</span>
            <span className={styles.triangle}></span>
        </div>
    )
}