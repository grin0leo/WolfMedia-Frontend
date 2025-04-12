import { BasicInfoBlock } from '@/shared/ui/BasicInfoBlock';
import styles from './audience.module.css'
import { BasicButton } from "@/shared/ui/BasicButton";

export function AudienceSection() {

    const infoList = [
        {
            textParts: [{ text: 'Создаем контент' }],
            imgSrc: '/Audience/content.svg'
        },
        {
            textParts: [{ text: 'Размещаем нативную рекламу' }],
            imgSrc: '/Audience/eye.svg'
        },
        {
            textParts: [{ text: 'Разрабатываем нативные спецпроекты' }],
            imgSrc: '/Audience/eye-tracking.svg'
        }
    ];


    return (
        <section className={styles.section}>


            <article>
                <h2 className={styles.label}>
                    Помогаем брендам наладить коммуникацию с аудиторией
                </h2>
                <p className={styles.description}>
                    Социальные сети - идеальная площадка для размещения нативной рекламы,
                    она встраивается в ленту пользователя,
                    вызывает большее доверие у аудитории, обходит блокировщики рекламы,
                    и органически набирает огромные охваты.
                </p>
            </article>
            <ul className={styles.infoList}>
                {infoList.map((element, index) => (
                    <BasicInfoBlock key={index} textParts={element.textParts} imgSrc={element.imgSrc} />
                ))}
            </ul>

            <BasicButton content="РЕКЛАМНОЕ СОТРУДНИЧЕСТВО " />
        </section>
    )
}