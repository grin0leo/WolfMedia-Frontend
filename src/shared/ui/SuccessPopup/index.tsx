import { useState } from 'react';
import Image from 'next/image';

import { BasicButton } from '@/shared/ui/BasicButton';
import styles from './succesPopup.module.css';

interface SuccessPopupProps {
    handleClose: () => void;
    title?: string;
    // message?: string;
    buttonText?: string;
}

export const SuccessPopup = ({
    handleClose,
    title = "УСПЕШНО ОТПРАВЛЕНО!",
    buttonText = "ЗАКРЫТЬ"
}: SuccessPopupProps) => {
    const [isVisible, setIsVisible] = useState(true);



    return (
        <div className={styles.overlay}>
            <div className={styles.content}>

                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>
                    Спасибо за ваше сообщение.<br /> Мы свяжемся с вами в ближайшее время!</p>
                <Image
                    src="/Communities/humor.svg"
                    width={80}
                    height={80}
                    alt="Успешная отправка"
                    className={styles.icon}
                />
                <BasicButton
                    onClick={handleClose}
                    content={buttonText}
                />
            </div>
        </div>
    );
};