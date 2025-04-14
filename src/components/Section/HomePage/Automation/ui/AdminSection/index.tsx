import styles from './admin.module.css';
import Image from "next/image";
import { ServiceItem } from "./ui/ServiceItem";
import { BasicButton } from "@/shared/ui/BasicButton";

export function AdminSection() {

    const itemList = [
        {
            text: 'Контент и развитие',
            imgSrc: '/Automation/rocket.svg'

        },
        {
            text: 'Управление и монетизация',
            imgSrc: '/Automation/repair.svg'
        },
        {
            text: 'Аренда сообществ',
            imgSrc: '/Automation/chronometr.svg'
        }
    ]
    return (
        <section className={styles.container}>
            <div className={styles.content}>

                <h3 className={styles.label}>
                    Услуги для администраторов
                </h3>
                <ul className={styles.list} >
                    {itemList.map((el, index) => (
                        < ServiceItem key={index} text={el.text} imgSrc={el.imgSrc} />
                    ))

                    }
                </ul>

                {/* зачем прокидывать классы, если значение display можно задать только в начале  */}
                <div className={styles.btnDesktopContainer}><BasicButton color="orange" content="ПОДРОБНЕЕ" /></div>
            </div>
            <Image className={styles.img} src={'/Automation/video.jpg'} width={770} height={440} alt="Видео плеер" />
            <div className={styles.btnMobileContainer}><BasicButton className={styles.btnMobile} color="orange" content="ПОДРОБНЕЕ" /></div>

        </section>
    )
}