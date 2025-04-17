import styles from './admin.module.css';
import Image from "next/image";
import { ServiceItem } from "./ServiceItem";
import { BasicButton } from "@/shared/ui/BasicButton";
import { AdminServiceItemList as itemList } from './consts';

export function AdminSection() {

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
                <div className={styles.btnDesktopContainer}><BasicButton color="orange" content="ПОДРОБНЕЕ" /></div>
            </div>
            <Image className={styles.img} src={'/Automation/video.jpg'} width={770} height={440} alt="Видео плеер" />
            <div className={styles.btnMobileContainer}><BasicButton className={styles.btnMobile} color="orange" content="ПОДРОБНЕЕ" /></div>

        </section>
    )
}