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

import { useEffect, useRef } from 'react'

import { PopUp } from '@/shared/ui/PopUp'



export function Header() {
    const pages = [
        ['О НАС', '/'],
        ['КЕЙСЫ', '/cases'],
        ['ИЗБРАННОЕ', '/cases/fav'],
        ['КОНТАКТЫ', '/contacts']
    ]

    const [isBurger, setIsBurger] = useState<boolean>(false)
    const pathname = usePathname()


    // Pop Up
    const dialogRef = useRef<HTMLDialogElement>(null)

    const openDialog = () => {
        dialogRef.current?.showModal()
        document.body.style.overflow = 'hidden';
    }

    // для анимации 
    const navRef = useRef<HTMLDivElement | null>(null)
    const indicatorRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const nav = navRef.current
        const indicator = indicatorRef.current
        if (!nav || !indicator) return

        const activeLink = nav.querySelector(`.${styles.activeLink}`) as HTMLAnchorElement | null
        if (!activeLink) return

        const linkRect = activeLink.getBoundingClientRect()
        const navRect = nav.getBoundingClientRect()

        indicator.style.left = `${linkRect.left - navRect.left}px`
        indicator.style.width = `${linkRect.width}px`
    }, [pathname])



    return (

        <header className={`${styles.header} ${isBurger ? styles.active : ''}`} >


            <BurgerButton onClick={() => setIsBurger(!isBurger)} isActive={isBurger} />
            <BurgerMenu setIsActive={() => setIsBurger(false)} isActive={isBurger} />

            <div className={styles.nav}>
                <Link href={'/'} className={styles.logo}>
                    <Image className={styles.logoCircle} src='/Layout/Header/LogoMobile.svg' alt="Логотип" width={40} height={40} />
                    <Image className={styles.logoName} src='/Layout/Header/LogoName.svg' alt="Логотип" width={286} height={70} />
                </Link>

                <nav className={styles.nav__list} ref={navRef}>
                    <div className={styles.indicator} ref={indicatorRef}></div>
                    {pages.map((el) => (
                        <Link
                            href={el[1]}
                            key={el[0]}
                            className={clsx(styles.nav__item, {
                                [styles.activeLink]: pathname === el[1]
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

                <button className={styles.mail} aria-label="Открыть форму для отправки сообщения нам на почту" onClick={openDialog}>
                    <span className={styles.mail__item_desktop}>НАПИСАТЬ НАМ</span>
                    <Image className={styles.mail__item_tablet} src='/Layout/Header/Mail.svg' width={24} height={19} alt="Иконка Почты" aria-hidden='true' />
                </button>
            </div>

            <PopUp onClose={() => dialogRef?.current?.close()} ref={dialogRef} />

        </header >
    )
}