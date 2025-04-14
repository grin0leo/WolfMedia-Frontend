import styles from './sloganItem.module.css'

export function SloganItems() {
    const items = [
        {
            mainText: "100 000 000",
            secondaryText: 'НАША АУДИТОРИЯ'
        },
        {
            mainText: "12 000 000",
            secondaryText: 'ЕЖЕДНЕВНО НАС ЧИТАЮТ'
        }]

    return (
        <ul className={styles.content}>
            {items.map((el, index) => (
                <li key={el.mainText} className={styles.item}>
                    {el.mainText}
                    <span key={el.secondaryText} className={styles.text}>
                        {el.secondaryText}
                    </span>
                </li>
            ))}
        </ul>
    )
}