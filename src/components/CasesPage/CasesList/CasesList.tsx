import styles from './casesList.module.css'
import { Case } from '@/components/CasesPage/Case'
import type { Case as CaseType } from '@/store/features/casesSlice'


export function CasesList({ items }: { items: CaseType[] }) {

    // оптимизировать, дважды прохожусь по одному массиву
    const leftColumn = items.filter((_, i) => i % 2 === 0)
    const rightColumn = items.filter((_, i) => i % 2 === 1)

    return (
        <div className={styles.columns}>
            <div className={styles.column}>
                {leftColumn.map((item) => (
                    <Case key={item.id} id={item.id} title={item.title} tags={item.tags} imgSrc={item.poster.image.src} />
                ))}
            </div>
            <div className={styles.column}>
                {rightColumn.map((item) => (
                    <Case key={item.id} id={item.id} title={item.title} tags={item.tags} imgSrc={item.poster.image.src} />
                ))}
            </div>
        </div>
    )
}
