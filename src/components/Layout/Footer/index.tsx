import Image from "next/image";
import styles from "./footer.module.css";
import { SocialList } from "../SocialList";
import { PhoneButton } from "@/shared/ui/PhoneButton";
import Link from "next/link";

export function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Link href={'/'}>
                    <Image className={styles.logo} src={"/Layout/Footer/Logo.svg"} width={208} height={51} alt="Логотип иконка" />
                    <Image className={styles.logoMobile} src={"/Layout/Footer/LogoMobile.svg"} width={51} height={51} alt="Логотип иконка" />
                </Link>

                <span className={styles.text_desktop}>Copyright 2019 (c) All rights reserved.</span>
                <nav className={styles.nav}>
                    <span className={styles.text_mobile}>Copyright 2019 (c) All rights reserved.</span>

                    <ul className={styles.social}>
                        <SocialList />
                    </ul>

                    <PhoneButton variant="footer" iconSrc="/Layout/Footer/Phone.svg" />
                </nav>
            </div>
            <span className={styles.text_tablet}>Copyright 2019 (c) All rights reserved.</span>
        </footer>
    )

}