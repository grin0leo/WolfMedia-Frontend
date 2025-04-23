'use client'
import styles from "./burgerMenu.module.css";
import Link from "next/link";
import { PhoneButton } from "@/shared/ui/PhoneButton";
import { PopUp } from '@/shared/ui/PopUp'

import { usePathname } from "next/navigation";
import clsx from "clsx";

import { useRef, useEffect } from "react";
import { useClickOutside } from "@/shared/hooks/useClickOutside";

export function BurgerMenu({ isActive, setIsActive }: { isActive: boolean, setIsActive: () => void }) {

    const menuRef = useRef<HTMLElement>(null);

    const pages = [['О НАС', '/'], ['КЕЙСЫ', '/cases'], ['ИЗБРАННОЕ', '/cases/fav'], ['КОНТАКТЫ', '/contacts']]
    const pathname = usePathname()


    // Pop Up
    const dialogRef = useRef<HTMLDialogElement>(null)

    const openDialog = () => {
        dialogRef.current?.showModal()
    }
    // 
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

        indicator.style.top = `${linkRect.top - navRect.top}px`
        indicator.style.height = `${linkRect.height}px`
    }, [pathname])
    useClickOutside(menuRef, setIsActive, isActive);

    return (

        <aside
            ref={menuRef}
            className={`${styles.aside} ${isActive ? styles.active : ''}`}>

            <nav className={styles.nav__list} ref={navRef}>
                <div className={styles.indicator} ref={indicatorRef}></div>
                {pages.map((el, index) => (
                    <Link href={el[1]} key={el[0]} className={clsx(styles.nav__item, {
                        [styles.activeLink]: pathname === el[1] || (el[1] === '' && pathname === '/')
                    })}>
                        {el[0]}
                    </Link>
                ))}
            </nav>

            <div className={styles.contacts}>
                <PhoneButton variant="burger" iconSrc="/Layout/Header/Phone.svg" />

                <button className={styles.mail} onClick={openDialog} aria-label="Отправить сообщение нам на почту">
                    <span className={styles.mail__item_desktop}  >НАПИСАТЬ НАМ</span>
                </button>
            </div>
            <PopUp onClose={() => dialogRef?.current?.close()} ref={dialogRef} />

        </aside>)
}