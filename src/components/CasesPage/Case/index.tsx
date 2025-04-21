'use client'

import parse from 'html-react-parser';
import styles from './case.module.css'
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '@/store/features/favoriteSlice';
import { Case as CaseType } from '@/store/features/casesSlice';


type CaseProps = {
    title: string;
    tags: string;
    imgSrc: string;
    id?: string

    // для добавления в избранное, передаю весь кейс, чтобы потом добавить его в куки
    fullCase: CaseType
}
export function Case({ title, tags, imgSrc, id, fullCase }: CaseProps) {


    const dispatch = useDispatch()

    return (
        <article className={styles.container}>
            <Link className={styles.link} href={`/cases/${id}`}>
                <img
                    className={styles.img}
                    src={imgSrc}
                    loading="lazy"
                />
            </Link>
            <div className={styles.textBlock}>
                {parse(`<header class="${styles.label}">${title}</header>`)}
                {parse(`<p class="${styles.text}"> ${tags}</p>`)}
            </div>

            <button onClick={() => dispatch(toggleFavorite(fullCase))}>
                ☆
            </button>

        </article>


    )

}