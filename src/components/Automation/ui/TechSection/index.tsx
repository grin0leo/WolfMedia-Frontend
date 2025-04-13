import { BasicInfoBlock } from "@/shared/ui/BasicInfoBlock";
import styles from './techSection.module.css'

export function TechSection() {

    const infoList = [
        {
            textParts: [{ text: 'Дает доступ к ' }, { text: 'детальной статистике, ', isAccent: true }, { text: 'так и всех сообществ вместе' }],
            imgSrc: '/Automation/bar-char.svg'
        },

        {
            textParts: [{ text: 'Выявляет наиболее ' }, { text: 'популярные посты', isAccent: true }],
            imgSrc: '/Automation/hearts.svg'
        },


        {
            textParts: [{ text: '  Позволяет оценивать ' }, { text: 'качество контента, ', isAccent: true }, { text: 'и следить за авторами постов' }],
            imgSrc: '/Automation/stars.svg'
        },

        {
            textParts: [{ text: 'Сообщает об ' }, { text: 'ошибках', isAccent: true }],
            imgSrc: '/Automation/bug.svg'
        }


    ];


    return (
        <section className={styles.container}>
            <h3 className={styles.label}>
                Мы подошли к решению этой проблемы технологично - разработали собственный софт, который:
            </h3>
            <ul className={styles.list}>
                {infoList.map((element, index) => (
                    <BasicInfoBlock textParts={element.textParts} imgSrc={element.imgSrc} key={element.imgSrc} />
                ))}
            </ul>
        </section>

    )
}