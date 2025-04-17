'use client'
import styles from './page.module.css'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { Case } from '@/components/CasesPage/Case'

export default function CasesSlug() {
    const params = useParams()
    const { slug } = params

    const item = useSelector((state: RootState) =>
        state.cases.items.find(item => item.id === slug)

    )

    if (!item) return (
        <section className={styles.page}>
            <div className={styles.error}>Кейс не найден</div>
        </section>
    )

    return (
        <section className={styles.page}>
            <div className={styles.case}>
                <Case id={item.id} title={item.title} tags={item.tags} imgSrc={item.poster.image.src} />
            </div>
        </section>
    )
}