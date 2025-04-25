import styles from './steper.module.css'
import clsx from 'clsx'

export function Stepper({ currentStep }: { currentStep: number }) {
    const numbers = [1, 2, 3]
    return (
        <ul className={styles.progress}>
            {numbers.map((el, i) => (
                <li key={i} className={clsx(styles.dot, currentStep >= el && styles.active)} />
            ))}
        </ul>
    )
}