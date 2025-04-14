import styles from './pointText.module.css'

export function PointText({ text }: { text: string }) {
    return (
        <div className={styles.element}>
            <div className={styles.bubble}>
                <span className={styles.text}>{text}</span>
                <span className={styles.triangle}></span>
            </div>
        </div>
    )
}
