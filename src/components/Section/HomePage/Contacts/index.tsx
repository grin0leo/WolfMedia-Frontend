import styles from './contacts.module.css'
import { MailElement } from './ui/MailElement'
import Image from 'next/image'
export function ContactsSection() {

    const workMails = [
        {
            mail: 'aa@wolfmedia.team',
            text: ' по вопросам размещения рекламы и рекламных спецпроектов'
        },
        {
            mail: 'aa@wolfmedia.team',
            text: 'по вопросам администрирования сообществ'
        },
        {
            mail: 'aa@wolfmedia.team',
            text: 'по любым другим вопросам'
        }
    ]


    // TODO Переиспользовать компонент Person  
    return (
        <section className={styles.section}>
            <h2 className={styles.label}>Есть вопрос или предложение?</h2>
            <h3 className={styles.description}>Напиши нам!</h3>


            <nav className={styles.content}>

                <div className={styles.team}>
                    <figure className={styles.person}>
                        <Image className={styles.img} src={'/Contacts/boss.png'} width={370} height={370} alt='Босс' />
                        <figcaption>
                            <MailElement mail={'aa@wolfmedia.team'} />
                        </figcaption>
                    </figure>

                    <figure className={styles.person}>
                        <Image className={styles.img} src={'/Contacts/man.png'} width={370} height={370} alt='Босс' />
                        <figcaption>
                            <MailElement mail={'aa@wolfmedia.team'} />
                        </figcaption>
                    </figure>
                </div>


                <ul className={styles.mailList}>
                    {workMails.map((element, index) => (
                        <MailElement className={styles.mailItem} key={index} mail={element.mail} text={element.text} />
                    ))}
                </ul>
            </nav>

        </section>
    )
}