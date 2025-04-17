import styles from './infoElement.module.css'

export type InfoElementProps = {

    accentStart?: string;
    textBlock1: string;
    accentMiddle?: string;
    textBlock2?: string;
    accentEnd?: string;
}

export function InfoElemnt({ accentStart, textBlock1, accentMiddle, textBlock2, accentEnd }: InfoElementProps) {

    return (
        <li className={styles.item}>
            <p>
                <span className={styles.accent}>
                    {accentStart}
                </span>
                {textBlock1}
                <span className={styles.accent}>
                    {accentMiddle}
                </span>
                {textBlock2}
                <span className={styles.accent}>
                    {accentEnd}
                </span>
            </p>
        </li>
    )
}