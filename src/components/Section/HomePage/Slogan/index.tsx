import styles from './slogan.module.css'
import { SloganItems } from './ui/SloganItems'


export function SloganSection() {
    return (
        <section className={styles.container}>
            <h1 className={styles.label}>
                ИЗДАТЕЛЬСТВО <br />
                НОВЫХ МЕДИА
            </h1>
            <SloganItems />
        </section >
    )
}