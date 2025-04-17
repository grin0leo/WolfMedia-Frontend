import styles from './infoElement.module.css';

type TextPart = {
    text: string;
    isAccent?: boolean;
};

export type InfoElementProps = {
    textParts: TextPart[];
};

export function InfoElement({ textParts }: InfoElementProps) {
    return (
        <li className={styles.item}>
            <p>
                {textParts.map((part, index) => (
                    <span key={index} className={part.isAccent ? styles.accent : undefined}>
                        {part.text}
                    </span>
                ))}
            </p>
        </li>
    );
}
