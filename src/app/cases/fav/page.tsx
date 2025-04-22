'use client'

import styles from './fav.module.css'
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { Case as CaseType } from "@/store/features/casesSlice"
import { Case } from "@/components/CasesPage/Case"


export default function FavPage() {

    const favCases = useSelector((state: RootState) => state.fav.cases)



    return (
        <main className={styles.container}>

            <h1>
                Избранное
            </h1>
            <ul className={styles.column}>
                {favCases.map((el: CaseType, index) => (
                    <li key={index}>
                        <Case id={el.id} title={el.title} tags={el.tags} imgSrc={el?.poster?.image?.src} fullCase={el} />
                    </li>
                ))}
            </ul>
        </main>
    )
}
