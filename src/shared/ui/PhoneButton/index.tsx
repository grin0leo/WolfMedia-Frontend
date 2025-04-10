import Image from 'next/image'
import clsx from 'clsx'
import styles from './phoneButton.module.css'

type PhoneButtonProps = {
    variant?: 'header' | 'footer' | 'burger'
    phone?: string
    iconSrc?: string
}

export const PhoneButton = ({
    variant = 'header',
    phone = '+7 495 257 55 65',
    iconSrc = '/Layout/Header/Phone.svg',
}: PhoneButtonProps) => {
    return (
        <button
            className={clsx(styles.phone, styles[variant])}
            aria-label={`Позвонить по номеру телефона ${phone}`}
        >
            <Image
                src={iconSrc}
                alt="Иконка телефона"
                aria-hidden="true"
                width={24}
                height={24}
            />
            <span className={styles.phone__text}>{phone}</span>
        </button>
    )
}
