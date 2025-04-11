import { infoListWorkflow } from './const'
import { InfoElemnt } from './ui/InfoElement'
import { Slider } from './ui/Slider'
import styles from './workflow.module.css'

// TODO узнаь как сделать STRONG выделение 
export function WorkflowSection() {



    return (

        <section className={styles.section}>
            <h2 className={styles.label}>
                Как мы работаем
            </h2>
            <article className={styles.content}>
                <ul className={styles.list}>
                    {infoListWorkflow.map((text, index) => (
                        <InfoElemnt key={index} text={text} />
                    ))}
                </ul>
                <Slider />
            </article>
        </section>
    )
}