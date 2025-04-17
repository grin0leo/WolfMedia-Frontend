import { BasicInfoBlock } from "@/shared/ui/BasicInfoBlock";
import styles from './techSection.module.css'
import { AdminTechinfoList as infoList } from "./contsts";

export function TechSection() {




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