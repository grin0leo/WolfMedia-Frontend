import styles from './infoElement.module.css'

export function InfoElemnt({ text }: { text: string }) {

    return (
        <li className={styles.item}>{text}</li>
    )
}