'use client'

import { useState } from 'react';
import styles from './slider.module.css';
import Image from 'next/image';
import { ImgButtonChoice } from './ui/ImgButtonChoice';

export function Slider() {

    const [link, setLink] = useState<string>('text.jpg')
    const imgsPath = ['birds.jpg', 'car.jpg', 'text.jpg']

    return (
        <div aria-hidden={true} className={styles.slider}>
            <Image src={`/Workflow/Slider/${link}`} className={styles.mainImg} width={770} height={433} alt='' />

            <ul className={styles.buttonList}>
                {imgsPath.map((path, index) => (
                    <ImgButtonChoice key={index} func={() => setLink(path)} iconSrc={path} />
                ))}
            </ul>
        </div>
    )
}