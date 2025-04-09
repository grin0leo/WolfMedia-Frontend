import Image from "next/image";
import styles from "./header.module.css";
import { SocialList } from "../SocialList";
import Link from "next/link";
import { BurgerMenu } from "../BurgerMenu";


// TODO вынесте кнопку из бургер меню и сделать useState внутри хедера, а состояние прокидывать через пропс
// TODO вынести блок с телефоном  и блок с написать нам ЗАРЕФАКТОРИТЬ 
// TODO Сделать ховер + эктив для кнопки написать нам 
export function Header() {
    const pages = [['О НАС', '/about'], ['ПОРТФОЛИО', 'projects'], ['УСЛУГИ', 'service'], ['КОНТАКТЫ', '/contacts']]

    return (

        <header className={styles.header} >
            <BurgerMenu />

            <div className={styles.nav}>
                <Image className={styles.nav__logo} src='/Layout/Header/Logo.svg' alt="Логотип" width={286} height={70} />
                <Image className={styles.nav__logoMobile} src='/Layout/Header/LogoMobile.svg' alt="Логотип" width={40} height={40} />

                <nav className={styles.nav__list}>
                    {pages.map((btn, index) => (
                        <Link href={btn[1]} key={btn[0]} className={styles.nav__item}>{btn[0]}</Link>
                        // СДЕЛАТЬ ПОДЧЕРКИВАНИЕ ЧЕРЕЗ SPAN + REDUX
                    ))}
                </nav>
            </div>



            <div className={styles.contacts}>

                <ul className={styles.social}>
                    <SocialList />
                </ul>

                <button className={styles.phone} aria-label="Позвонить на по номеру телефона +7 495 257 55 65">
                    <Image src='/Layout/Header/Phone.svg' alt="Иконка телефона" aria-hidden='true' width={24} height={24} />
                    <span className={styles.phone__text}>+7 495 257 55 65</span>
                </button>

                <button className={styles.mail} aria-label="Отправить сообщение нам на почту">
                    <span className={styles.mail__item_desktop}>НАПИСАТЬ НАМ</span>
                    <Image className={styles.mail__item_tablet} src='/Layout/Header/Mail.svg' width={24} height={19} alt="Иконка Почты" aria-hidden='true' />
                </button>
            </div>

        </header>
    )
}