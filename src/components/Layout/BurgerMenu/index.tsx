'use client'
import styles from "./burgerMenu.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function BurgerMenu() {

    const pages = [['О НАС', '/about'], ['ПОРТФОЛИО', 'projects'], ['УСЛУГИ', 'service'], ['КОНТАКТЫ', '/contacts']]
    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <div className={styles.burgerContainer}>
            <button
                className={styles.burgerButton}
                onClick={() => setIsActive(!isActive)}
                aria-label={isActive ? "Закрыть меню" : "Открыть меню"}
            >
                {isActive ? "×" : "☰"}
            </button>

            {/* Бургер меню */}
            <aside className={`${styles.aside} ${isActive ? styles.active : ''}`}>

                <nav className={styles.nav__list}>
                    {pages.map((btn, index) => (
                        <Link href={btn[1]} key={btn[0]} className={styles.nav__item}>{btn[0]}</Link>
                    ))}
                </nav>

                <div className={styles.contacts}>
                    {/* Номер телефона */}
                    <button className={styles.phone} aria-label="Позвонить на по номеру телефона +7 495 257 55 65">
                        <Image src='/Layout/Header/Phone.svg' alt="Иконка телефона" aria-hidden='true' width={24} height={24} />
                        <span className={styles.phone__text}>+7 495 257 55 65</span>
                    </button>

                    {/* Почта */}
                    <button className={styles.mail} aria-label="Отправить сообщение нам на почту">
                        <span className={styles.mail__item_desktop}>НАПИСАТЬ НАМ</span>
                    </button>
                </div>
            </aside>
        </div>)
}