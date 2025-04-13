import styles from './automation.module.css'
import { TechSection } from "./ui/TechSection";
import { AdminSection } from "./ui/AdminSection";

export function AutomationSection() {


    return (


        <section className={styles.mainSection}>
            <article className={styles.arcticle}>
                <h2 className={styles.label}>
                    Мы полностью автоматизировали
                    работу по управлению сообществами
                </h2>
                <p>Чем больше сообществ в активе, тем больше времени требуется на планирование, ведение и сбор статистики.</p>
            </article>

            <TechSection />
            <AdminSection />
        </section>
    )
}