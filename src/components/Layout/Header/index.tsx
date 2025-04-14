'use client'

import Image from "next/image";
import styles from "./header.module.css";
import { SocialList } from "../SocialList";
import Link from "next/link";
import { BurgerMenu } from "../BurgerMenu";
import { PhoneButton } from "@/shared/ui/PhoneButton";
import { useState } from "react";
import { BurgerButton } from "../BurgerMenu/ui/BurgerButton";

import { usePathname } from "next/navigation";
import clsx from "clsx";


// TODO Сделать ховер + эктив для кнопки написать нам 
// TODO добавить свечение при правильном роуте ! 
export function Header() {
    const pages = [['О НАС', ''], ['ПОРТФОЛИО', '/projects'], ['УСЛУГИ', 'service'], ['КОНТАКТЫ', '/contacts']]

    const [isBurger, setIsBurger] = useState<boolean>(false)
    const pathname = usePathname()


    return (

        <header className={`${styles.header} ${isBurger ? styles.active : ''}`} >


            <BurgerButton onClick={() => setIsBurger(!isBurger)} isActive={isBurger} />
            <BurgerMenu isActive={isBurger} />

            <div className={styles.nav}>
                <div className={styles.logo}>
                    <Image className={styles.logoCircle} src='/Layout/Header/LogoMobile.svg' alt="Логотип" width={40} height={40} />
                    <Image className={styles.logoName} src='/Layout/Header/LogoName.svg' alt="Логотип" width={286} height={70} />
                </div>

                <nav className={styles.nav__list}>
                    {pages.map((el, index) => (
                        <Link href={el[1]} key={el[0]} className={clsx(styles.nav__item, {
                            [styles.activeLink]: pathname === el[1] || (el[1] === '' && pathname === '/')
                        })}>
                            {el[0]}
                        </Link>
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