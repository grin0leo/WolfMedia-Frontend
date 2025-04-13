import Image from 'next/image';
import styles from './mailElement.module.css'
import clsx from 'clsx';

type MailElementProps = {
    mail: string;
    text?: string;
    className?: string;
    classNameText?: string;

}


export function MailElement({ mail, text, className, classNameText }: MailElementProps) {

    return (
        <li className={clsx(styles.container, className)}>
            <div className={styles.mailBlock}>
                <Image className={styles.img} src={'/Contacts/arrow.svg'} width={9} height={16} alt='Иконка' />
                <p className={clsx(styles.mail, classNameText)}>
                    {mail}
                </p>
            </div>
            {text ?
                <span className={styles.text}>
                    {text}
                </span>
                : ''}
        </li>
    )
}