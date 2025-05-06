import styles from './steper.module.css'
import clsx from 'clsx'

export function Stepper({ currentStep }: { currentStep: number }) {
    const numbers = [1, 2, 3]
    return (
        <div className={styles.wrapper}>
            {numbers.map((el, i) => (
                <div key={i} className={styles.step}>
                    <div className={clsx(styles.dot, currentStep >= el && styles.active)} />
                    {i < numbers.length - 1 && <div className={clsx(styles.line, currentStep > el && styles.activeLine)} />}
                </div>
            ))}
        </div>
    )
}