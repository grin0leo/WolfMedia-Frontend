'use client'
import styles from './page.module.css'
import { useParams } from 'next/navigation'
import { Case } from '@/components/CasesPage/Case'
import { useCaseItem } from '@/shared/hooks/useCasesSlug'


export default function CasesSlug() {
    const { slug } = useParams() as { slug: string }
    const { item, error, loading } = useCaseItem(slug);

    if (error) {
        return (
            <section className={styles.page}>
                <div className={styles.error}>Кейс не найден!</div>
            </section>
        )
    }

    if (loading || !item) {
        return (
            <section className={styles.page}>
                <div className={styles.loading}>Загрузка...</div>
            </section>
        )
    }

    return (
        <section className={styles.page}>
            <div className={styles.case}>
                <Case fullCase={item} id={item.id} title={item.title} tags={item.tags} imgSrc={item.poster.image.src} />
            </div>
        </section>
    )
}
