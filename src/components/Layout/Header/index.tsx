'use client'

import Image from "next/image";
import styles from "./header.module.css";
import { SocialList } from "../SocialList";
import Link from "next/link";
import { BurgerMenu } from "../BurgerMenu";
import { PhoneButton } from "@/shared/ui/PhoneButton";
import { useState } from "react";
import clsx from "clsx";
import { BurgerButton } from "../BurgerMenu/ui/BurgerButton";


// TODO блок с написать нам ЗАРЕФАКТОРИТЬ 
// TODO Сделать ховер + эктив для кнопки написать нам 
// TODO добавить свечение при правильном роуте ! 
export function Header() {
    const pages = [['О НАС', '/about'], ['ПОРТФОЛИО', 'projects'], ['УСЛУГИ', 'service'], ['КОНТАКТЫ', '/contacts']]

    const [isBurger, setIsBurger] = useState<boolean>(false)

    return (

        <header className={`${styles.header} ${isBurger ? styles.active : ''}`} >


            <BurgerButton onClick={() => setIsBurger(!isBurger)} isActive={isBurger} />
            <BurgerMenu isActive={isBurger} />

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

                <PhoneButton />

                <button className={styles.mail} aria-label="Отправить сообщение нам на почту">
                    <span className={styles.mail__item_desktop}>НАПИСАТЬ НАМ</span>
                    <Image className={styles.mail__item_tablet} src='/Layout/Header/Mail.svg' width={24} height={19} alt="Иконка Почты" aria-hidden='true' />
                </button>
            </div>

        </header>
    )
}