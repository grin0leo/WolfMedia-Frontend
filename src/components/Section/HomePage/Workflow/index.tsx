import { infoListWorkflow } from './const'
import { InfoElement } from './ui/InfoElement'
import { Slider } from './ui/Slider'
import styles from './workflow.module.css'

export function WorkflowSection() {
    return (
        <section className={styles.section}>
            <h2 className={styles.label}>
                Как мы работаем
            </h2>
            <article className={styles.content}>
                <ul className={styles.list}>
                    {infoListWorkflow.map((element, index) => (
                        <InfoElement key={index} textParts={element.textParts} />
                    ))}
                </ul>
                <Slider />
            </article>
        </section>
    )
}