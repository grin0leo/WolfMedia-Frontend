import Image from "next/image";
import styles from './basicInfoBlock.module.css';

type TextPart = {
    text: string;
    isAccent?: boolean;
};

type BasicInfoBlock = {
    textParts: TextPart[];
    imgSrc: string;
};


export function BasicInfoBlock({ textParts, imgSrc }: BasicInfoBlock) {
    return (
        <li className={styles.container}>
            <figure className={styles.imgBlock}>
                <Image className={styles.img} src={imgSrc} width={100} height={100} alt="Иконка" aria-hidden={true} />
            </figure>
            <div className={styles.textBlock}>
                <p className={styles.text}>
                    {textParts.map((part, index) => (
                        <span key={index} className={part.isAccent ? styles.accent : undefined}>
                            {part.text}
                        </span>
                    ))}
                </p>
            </div>
        </li>
    )
}