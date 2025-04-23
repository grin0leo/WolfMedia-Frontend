import { BasicButton } from '@/shared/ui/BasicButton'
import styles from './popUp.module.css'
import { forwardRef, useEffect, useRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { useForm, SubmitHandler } from "react-hook-form"


type PopUpProps = {
    onClose: () => void;
}
interface PopUpForm {
    name: string;
    tel: string;
    message: string;
}
export const PopUp = forwardRef<HTMLDialogElement, PopUpProps>(({ onClose }, ref) => {

    const dialogRef = ref as React.RefObject<HTMLDialogElement>

    const { register, handleSubmit } = useForm<PopUpForm>()


    // блокирую скролл
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
        };
    }, []);


    //использование template здесь не нужно, тк реакт сам управляет DOM 
    // template блокирует возможно использовать showModal и close

    return (

        <dialog
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
            ref={dialogRef}
            className={styles.dialog}>

            <form action="" className={styles.form}>
                <h2 className={styles.title}>НАПИСАТЬ НАМ</h2>

                {/* ИМЯ */}
                <div className={styles.item}>
                    <input
                        className={styles.input}
                        required
                        type="text"
                        id='name'
                        placeholder=" "
                        {...register("name", { required: true, })}

                    />
                    <label htmlFor="name" className={styles.label}>Ваше имя</label>
                </div>

                {/* ТЕЛЕФОН */}
                <div className={styles.item}>
                    <input
                        type="tel"
                        id='telephone'
                        className={styles.input}
                        required
                        placeholder=" "
                        {...register("tel", { required: true, })}
                    />
                    <label htmlFor="telephone" className={styles.label}>Ваш телефон</label>
                </div>

                {/* СООБЩЕНИЕ */}
                <div className={styles.item}>

                    <textarea
                        id='message'
                        className={clsx(styles.input, styles.textArea)}
                        required
                        placeholder=" "
                        {...register("message", { required: true, })}
                    />
                    <label className={styles.label} htmlFor="message">Ваше сообщение</label>
                </div>

                <BasicButton content='ОТПРАВИТЬ' />

                <p className={styles.policy}>Нажимая кнопку “Отправить” вы даёте своё согласие на обработку персональных данных</p>

                <button className={styles.crossButton} onClick={onClose}>
                    <Image src={'/PopUp/Cross.svg'} width={19} height={19} aria-label='Закрыть PopUp окно' alt='' />
                </button >

            </form>

        </dialog >
    )
})
PopUp.displayName = 'PopUp'
