'use client'
import styles from "./burgerMenu.module.css";
import Link from "next/link";
import { PhoneButton } from "@/shared/ui/PhoneButton";

import { usePathname } from "next/navigation";
import clsx from "clsx";

import { useRef } from "react";
import { useClickOutside } from "@/shared/hooks/useClickOutside";

export function BurgerMenu({ isActive, setIsActive }: { isActive: boolean, setIsActive: () => void }) {

    const menuRef = useRef<HTMLElement>(null);

    const pages = [['О НАС', '/'], ['КЕЙСЫ', '/cases'], ['УСЛУГИ', '/service'], ['КОНТАКТЫ', '/contacts']]
    const pathname = usePathname()

    useClickOutside(menuRef, setIsActive, isActive);

    return (

        <aside
            ref={menuRef}
            className={`${styles.aside} ${isActive ? styles.active : ''}`}>

            <nav className={styles.nav__list}>
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

                <button className={styles.mail} aria-label="Отправить сообщение нам на почту">
                    <span className={styles.mail__item_desktop}>НАПИСАТЬ НАМ</span>
                </button>
            </div>
        </aside>)
}