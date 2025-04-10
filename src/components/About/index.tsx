import { BasicButton } from "@/shared/ui/BasicButton";
import styles from './about.module.css'

import { RoadMap } from "./ui/RoadMap";


export function AboutSection() {

    return (

        <section>

            <h2 className={styles.label}>
                О НАС
            </h2>
            <article className={styles.content}>

                <div className={styles.item}>
                    <p className={styles.description}>
                        «Wolfmedia» – это редакция, где ежедневно авторы,
                        иллюстраторы, дизайнеры, видеографы, создают уникальный контент и
                        доносят его до огромной аудитории с помощью социальных сетей.< br />
                        < br />
                        Социальные сети стали главным инструменом коммуникации в 21 веке. Сообщества, паблики,
                        youtube-каналы, блоги получают внимание миллионной аудитории, зачастую их охват превышает
                        охват популярных телеканалов и журналов.< br />
                        < br />
                        И пока традиционные СМИ занимаются перетаскивание аудитории с одной площадки на
                        другую, мы идем прямо к читателю, в его новостную
                        ленту.
                    </p>

                    {/* использую div, тк этот блок не несет никакой смысловой нагрузки
                    а выполняет только роль контейнера с помощью которого я регулирую адаптив
                    
                    можно заменит на figure???
                    */}
                    <div className={styles.roadMapMobile}><RoadMap /></div>

                    <BasicButton className={styles.desktopButton} color="orange" size="small" content="ПОДРОБНЕЕ" />

                </div>


                <div className={styles.roadMap}><RoadMap /></div>
            </article>


        </section>
    )
}