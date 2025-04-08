import Image from "next/image";
import styles from "./header.module.css";

export function Header() {

    return (

        <header className={styles.header}>

            {/* Бургер меню */}
            <button className={styles.burgerMenu}>
                <Image src='/Layout/Header/Burger.svg' width={24} height={16} alt="Иконка бокового меню" aria-label="Открыть боковое меню" />
            </button>

            {/* Контейнер с nav  */}
            <div className={styles.nav}>
                <Image src='/Layout/Header/Logo.svg' alt="Логотип" width={286} height={70} />
                <nav className={styles.nav__list}>
                    {/* Сделать через Link??? */}
                    <button className={styles.nav__item}>О нас</button>
                    <button className={styles.nav__item}>О нас</button>
                    <button className={styles.nav__item}>О нас</button>
                    <button className={styles.nav__item}>О нас</button>
                </nav>
            </div>


            {/* Контейнер с контактами*/}
            <div className={styles.contacts}>

                {/*Соц сети */}
                <div className={styles.social}>
                    <button aria-label="Перейти в нашу группу ВК">
                        <Image src='/Layout/Header/VK.svg' alt="Иконка ВК" width={24} height={24} />
                    </button>

                    <button aria-label="Перейти в нашу группу ВК">
                        <Image src='/Layout/Header/OK.svg' alt="Иконка ВК" width={24} height={24} />
                    </button>

                    <button aria-label="Перейти в нашу группу ВК">
                        <Image src='/Layout/Header/Facebook.svg' alt="Иконка ВК" width={24} height={24} />
                    </button>

                    <button aria-label="Перейти в нашу группу ВК">
                        <Image src='/Layout/Header/Twitter.svg' alt="Иконка ВК" width={24} height={24} />
                    </button>
                </div>

                {/* Номер телефона */}
                <button className={styles.phone} aria-label="Позвонить на по номеру телефона +7 495 257 55 65">
                    <Image src='/Layout/Header/Phone.svg' alt="Иконка телефона" aria-hidden='true' width={24} height={24} />
                    +7 495 257 55 65
                </button>

                {/* Почта */}
                <button className={styles.mail} aria-label="Отправить сообщение нам на почту">
                    <span className={styles.mail__item_desktop}>Написать нам</span>
                    <Image className={styles.mail__item_tablet} src='/Layout/Header/Mail.svg' width={24} height={19} alt="Иконка Почты" aria-hidden='true' />
                </button>
            </div>





        </header>
    )
}