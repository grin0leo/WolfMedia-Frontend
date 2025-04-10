import { BasicButton } from "@/shared/ui/BasicButton";
import styles from './about.module.css'
import { RoadMapItem } from "./ui/RoadMapItem";
import { RoadMap } from "./ui/RoadMap";


export function AboutSection() {

    return (

        <section>

            <article>

                <h2 className={styles.label}>
                    О НАС
                </h2>
                <p className={styles.description}>
                    «Wolfmedia» – это редакция, где ежедневно авторы, иллюстраторы, дизайнеры, видеографы, создают уникальный контент и доносят его до огромной аудитории с помощью социальных сетей.
                    Социальные сети стали главным инструменом коммуникации в 21 веке. Сообщества, паблики,
                    youtube-каналы, блоги получают внимание миллионной аудитории, зачастую их охват превышает
                    охват популярных телеканалов и журналов.
                    И пока традиционные СМИ занимаются перетаскивание аудитории с одной площадки на
                    другую, мы идем прямо к читателю, в его новостную
                    ленту.
                </p>

                <BasicButton className={styles.desktopButton} color="orange" size="small" content="ПОДРОБНЕЕ" />
                <RoadMap className={styles.roadMap} />
            </article>
            <BasicButton className={styles.mobileButton} color="orange" size="small" content="ПОДРОБНЕЕ" />

        </section>
    )
}