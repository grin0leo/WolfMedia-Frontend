import styles from './serviceItem.module.css'
import Image from "next/image";

export function ServiceItem({ text, imgSrc }: { text: string, imgSrc: string }) {

    return (

        <li className={styles.item}>
            <Image src={imgSrc} alt={text} className={styles.img} width={44} height={44} />
            <p className={styles.text}>{text}</p>
        </li>
    )
}