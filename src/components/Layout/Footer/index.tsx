import Image from "next/image";
import styles from "./footer.module.css";
import { SocialList } from "../SocialList";


export function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Image className={styles.logo} src={"/Layout/Footer/Logo.svg"} width={208} height={51} alt="Логотип иконка" />
                <Image className={styles.logoMobile} src={"/Layout/Footer/LogoMobile.svg"} width={51} height={51} alt="Логотип иконка" />
                <span className={styles.text_desktop}>Copyright 2019 (c) All rights reserved.</span>
                <nav className={styles.nav}>
                    <span className={styles.text_mobile}>Copyright 2019 (c) All rights reserved.</span>

                    {/* Соцсети */}
                    <ul className={styles.social}>
                        <SocialList />
                    </ul>
                    {/* Номер телефона */}
                    <button className={styles.phone} aria-label="Позвонить на по номеру телефона +7 495 257 55 65">
                        <Image src='/Layout/Footer/Phone.svg' alt="Иконка телефона" aria-hidden='true' width={24} height={24} />
                        <span className={styles.phone__text}>+7 495 257 55 65</span>
                    </button>
                </nav>
            </div>
            <span className={styles.text_tablet}>Copyright 2019 (c) All rights reserved.</span>
        </footer>
    )

}