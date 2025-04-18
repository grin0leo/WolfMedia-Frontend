import { communitiesInfo } from "./const"
import { Community } from "./ui/Сommunity"
import styles from './communities.module.css'

export function CommunitiesSection() {
    return (
        <section className={styles.section}>
            <h2 className={styles.label}>Более 150 тематических сообществ</h2>
            <ul className={styles.list}>
                {communitiesInfo.map((community, index) => (
                    <Community key={index} text={community.text} imgSrc={community.imgSrc} />
                ))}
            </ul>

            <span className={styles.description}>Присутствуем на всех популярных платформах</span>

        </section>
    )
}