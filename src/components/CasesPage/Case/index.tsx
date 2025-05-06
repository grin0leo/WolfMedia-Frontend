'use client'

import parse from 'html-react-parser';
import styles from './case.module.css'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '@/store/features/favoriteSlice';
import { Case as CaseType } from '@/store/features/casesSlice';
import StarButton from '../Star/starButton';
import { RootState } from '@/store/store';
import { RefObject, useRef, useState } from 'react';
import Image from 'next/image';
// import { useCustomCursor } from '@/shared/hooks/useCustomCursor';


type CaseProps = {
    title: string;
    tags: string;
    imgSrc: string;
    id?: string
    fullCase: CaseType
}
export function Case({ title, tags, imgSrc, id, fullCase }: CaseProps) {


    const dispatch = useDispatch()
    const items = useSelector((state: RootState) => state.fav.cases)

    const cursorRef = useRef<HTMLDivElement>(null);
    // const { handleMouseMove } = useCustomCursor(cursorRef as RefObject<HTMLDivElement>);
    const [showCursor, setShowCursor] = useState(false);



    const isActive = items.some(item => item.id === fullCase.id)
    return (
        <article className={styles.container}
        // onMouseMove={handleMouseMove}
        // onMouseEnter={() => setShowCursor(true)}
        // onMouseLeave={() => setShowCursor(false)}
        >
            {showCursor && (
                <div ref={cursorRef} className={styles.cursor}>
                    <Image src="/Case/arrow.svg" width={24} height={24} alt="" />
                </div>
            )}
            <Link className={styles.link} href={`/cases/${id}`}>
                <div className={styles.imgWrapper}>
                    <div className={styles.imgInner}>
                        <img className={styles.img} src={imgSrc} loading="lazy" />
                    </div>
                </div>

            </Link>
            <div className={styles.textBlock}>
                {parse(`<header class="${styles.label}">${title}</header>`)}
                {parse(`<p class="${styles.text}"> ${tags}</p>`)}
            </div>
            <div className={styles.star}>
                <StarButton isActive={isActive} toggleFav={() => dispatch(toggleFavorite(fullCase))} />
            </div>

        </article>


    )

}