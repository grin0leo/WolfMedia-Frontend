import Image from "next/image";
import styles from "./header.module.css";
import { SocialList } from "../SocialList";

export function Header() {

    return (

        <header className={styles.header}>

            {/* Бургер меню */}
            <button className={styles.burgerMenu}>
                <Image src='/Layout/Header/Burger.svg' width={24} height={16} alt="Иконка бокового меню" aria-label="Открыть боковое меню" />
            </button>

            {/* Контейнер с nav  */}
            <div className={styles.nav}>
                <Image className={styles.nav__logo} src='/Layout/Header/Logo.svg' alt="Логотип" width={286} height={70} />
                <Image className={styles.nav__logoMobile} src='/Layout/Header/LogoMobile.svg' alt="Логотип" width={40} height={40} />

                <nav className={styles.nav__list}>
                    {/* Сделать через Link??? */}
                    <button className={styles.nav__item}>
                        О НАС
                        {/* <span></span> */}
                    </button>
                    <button className={styles.nav__item}>ПОРТФОЛИО</button>
                    <button className={styles.nav__item}>УСЛУГИ</button>
                    <button className={styles.nav__item}>КОНТАКТЫ</button>
                </nav>
            </div>


            {/* Контейнер с контактами*/}
            <div className={styles.contacts}>

                {/*Соц сети */}
                <ul className={styles.social}>
                    <SocialList />
                </ul>


                {/* Номер телефона */}
                <button className={styles.phone} aria-label="Позвонить на по номеру телефона +7 495 257 55 65">
                    <Image src='/Layout/Header/Phone.svg' alt="Иконка телефона" aria-hidden='true' width={24} height={24} />
                    <span className={styles.phone__text}>+7 495 257 55 65</span>
                </button>

                {/* Почта */}
                <button className={styles.mail} aria-label="Отправить сообщение нам на почту">
                    <span className={styles.mail__item_desktop}>НАПИСАТЬ НАМ</span>
                    <Image className={styles.mail__item_tablet} src='/Layout/Header/Mail.svg' width={24} height={19} alt="Иконка Почты" aria-hidden='true' />
                </button>
            </div>

        </header>
    )
}