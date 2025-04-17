import styles from './casesList.module.css'
import { Case } from '@/components/CasesPage/Case'
import type { Case as CaseType } from '@/store/features/casesSlice'


export function CasesList({ items }: { items: CaseType[] }) {

    const leftColumn: CaseType[] = [];
    const rightColumn: CaseType[] = [];

    items.forEach((item, i) => {
        (i % 2 === 0 ? leftColumn : rightColumn).push(item);
    });

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
