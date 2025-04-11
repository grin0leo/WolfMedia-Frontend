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
                    {infoListWorkflow.map((element, index) => (
                        <InfoElemnt
                            key={index}
                            textBlock1={element.textBlock1}
                            textBlock2={element.textBlock2}
                            accentStart={element.accentStart}
                            accentMiddle={element.accentMiddle}
                            accentEnd={element.accentEnd}
                        />
                    ))}
                </ul>
                <Slider />
            </article>
        </section>
    )
}