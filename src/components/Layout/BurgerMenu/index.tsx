'use client'
import styles from "./burgerMenu.module.css";
import Link from "next/link";
import { PhoneButton } from "@/shared/ui/PhoneButton";

export function BurgerMenu({ isActive }: { isActive: boolean }) {

    const pages = [['О НАС', '/'], ['ПОРТФОЛИО', '/projects'], ['УСЛУГИ', '/service'], ['КОНТАКТЫ', '/contacts']]


    return (

        <aside className={`${styles.aside} ${isActive ? styles.active : ''}`}>

            <nav className={styles.nav__list}>
                {pages.map((btn, index) => (
                    <Link href={btn[1]} key={btn[0]} className={styles.nav__item}>{btn[0]}</Link>
                ))}
            </nav>

            <div className={styles.contacts}>
                <PhoneButton variant="burger" iconSrc="/Layout/Header/Phone.svg" />

                <button className={styles.mail} aria-label="Отправить сообщение нам на почту">
                    <span className={styles.mail__item_desktop}>НАПИСАТЬ НАМ</span>
                </button>
            </div>
        </aside>)
}