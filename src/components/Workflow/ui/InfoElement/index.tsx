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
            <strong className={styles.accent}>
                {accentStart}
            </strong>
            {textBlock1}
            <strong className={styles.accent}>
                {accentMiddle}
            </strong>
            {textBlock2}
            <strong className={styles.accent}>
                {accentEnd}
            </strong>
        </li>
    )
}