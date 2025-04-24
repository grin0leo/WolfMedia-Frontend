import { BasicButton } from '@/shared/ui/BasicButton'
import styles from './popUp.module.css'
import { forwardRef, useEffect, useRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { useForm, SubmitHandler } from "react-hook-form"
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { formatPhone } from './features/phoneMask';



type PopUpProps = {
    onClose: () => void;
}

// схема Zod
const popUpSchema = z.object({
    name: z.string()
        .min(2, "Имя должно содержать хотя бы 2 символа")
        .regex(/^[A-Za-zА-Яа-яЁё\s]+$/, "Имя должно содержать только буквы"),
    tel: z
        .string()
        .min(18, "Введите корректный номер телефона"),
    message: z
        .string().min(5, "Сообщение слишком короткое")

});

type PopUpForm = z.infer<typeof popUpSchema>;


export const PopUp = forwardRef<HTMLDialogElement, PopUpProps>(({ onClose }, ref) => {

    const dialogRef = ref as React.RefObject<HTMLDialogElement>

    const handleClose = () => {
        document.body.style.overflow = '';
        onClose();
    };

    // React-Hook-Form
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm<PopUpForm>({
        resolver: zodResolver(popUpSchema),
    });

    const onSubmit: SubmitHandler<PopUpForm> = (data) => {
        console.log("Форма отправлена", data);
        reset();
        handleClose();
    };

    //использование template здесь не нужно, тк реакт сам управляет DOM 
    // template блокирует возможно использовать showModal и close

    return (

        <dialog
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    handleClose()
                }
            }}
            ref={dialogRef}
            className={styles.dialog}>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
                    {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                </div>

                {/* ТЕЛЕФОН */}
                <div className={styles.item}>
                    <input
                        type="tel"
                        id='telephone'
                        className={styles.input}
                        required
                        placeholder=" "
                        {...register("tel", {
                            required: true,
                            onChange: (e) => {
                                const formatted = formatPhone(e.target.value);
                                setValue("tel", formatted);
                            },
                        })}
                    />
                    <label htmlFor="telephone" className={styles.label}>Ваш телефон</label>
                    {errors.tel && <p className={styles.error}>{errors.tel.message}</p>}
                </div>

                {/* СООБЩЕНИЕ */}
                <div className={styles.item}>

                    <textarea
                        id='message'
                        maxLength={250}
                        className={clsx(styles.input, styles.textArea)}
                        required
                        placeholder=" "
                        {...register("message", { required: true, })}
                    />
                    <label className={styles.label} htmlFor="message">Ваше сообщение</label>
                    {errors.message && <p className={styles.error}>{errors.message.message}</p>}
                </div>


                {/* Добавить логику отправки */}

                <BasicButton type="submit" content='ОТПРАВИТЬ' />

                <p className={styles.policy}>Нажимая кнопку “Отправить” вы даёте своё согласие на обработку персональных данных</p>

                <button className={styles.crossButton} onClick={handleClose}>
                    <Image src={'/PopUp/Cross.svg'} width={19} height={19} aria-label='Закрыть PopUp окно' alt='' />
                </button >

            </form>

        </dialog >
    )
})
PopUp.displayName = 'PopUp'
