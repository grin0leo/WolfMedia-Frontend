import { HoverWindow } from '../HoverWindow';
import styles from './community.module.css'
import Image from "next/image";

type CommunityProps = {
    text: string;
    imgSrc: string;
}


export function Community({ text, imgSrc }: CommunityProps) {

    return (
        <li className={styles.container}>
            <button className={styles.item}>
                <Image className={styles.img} src={imgSrc} width={100} height={100} alt={`Иконка ${text}`} />
                {text}
            </button>
            <HoverWindow className={styles.hoverWindow} />

        </li>
    )
}