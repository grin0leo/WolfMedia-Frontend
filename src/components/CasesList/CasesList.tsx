import styles from './casesList.module.css'
import { Case } from '@/components/Case'



type Poster = {
    color: string
    format: string
    video?: string
    image: {
        src: string
        src2x?: string
        tablet?: string
        mobile?: string
    }
}

type CaseType = {
    id: string
    title: string
    tags: string
    poster: Poster
}


export function CasesList({ items }: { items: CaseType[] }) {

    const leftColumn = items.filter((_, i) => i % 2 === 0)
    const rightColumn = items.filter((_, i) => i % 2 === 1)

    return (
        <div className={styles.columns}>
            <div className={styles.column}>
                {leftColumn.map((item) => (
                    <Case key={item.id} title={item.title} tags={item.tags} imgSrc={item.poster.image.src} />
                ))}
            </div>
            <div className={styles.column}>
                {rightColumn.map((item) => (
                    <Case key={item.id} title={item.title} tags={item.tags} imgSrc={item.poster.image.src} />
                ))}
            </div>
        </div>
    )
}
