import Image from "next/image";
import styles from "./footer.module.css";

function SocialLink({ name, path }: { name: string; path: string }) {
    return (
        <button aria-label={`Перейти в нашу группу ${name}`}>
            <Image src={path} alt={`Иконка ${name}`} width={24} height={24} />
        </button>
    )
}

export function Footer() {
    const socialLinks = [['ВК', '/Layout/VK.svg'], ['Одноклассники', '/Layout/OK.svg'], ['Facebook', '/Layout/Facebook.svg'], ['Twitter', '/Layout/Twitter.svg']]





    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Image className={styles.logo} src={"/Layout/Footer/Logo.svg"} width={208} height={51} alt="Логотип иконка" />
                <Image className={styles.logoMobile} src={"/Layout/Footer/LogoMobile.svg"} width={51} height={51} alt="Логотип иконка" />
                <span className={styles.text_desktop}>Copyright 2019 (c) All rights reserved.</span>
                <nav className={styles.nav}>


                    {/* Соцсети */}
                    {/* TODO сделать через ul и сделать через map внутри header*/}
                    <div className={styles.social}>
                        {socialLinks.map((btn, index) => (
                            <SocialLink key={index} name={btn[0]} path={btn[1]} />
                        ))}
                    </div>

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