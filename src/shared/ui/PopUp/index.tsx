import { BasicButton } from '@/shared/ui/BasicButton'
import styles from './popUp.module.css'
import { forwardRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';


import { formatPhone } from './features/phoneMask';
import { z } from 'zod';

// схема Zod
const formDataSchema = z.object({
    name: z.string()
        .min(2, "Имя должно содержать хотя бы 2 символа")
        .regex(/^[A-Za-zА-Яа-яЁё\s]+$/, "Имя должно содержать только буквы"),
    tel: z
        .string()
        .min(18, "Введите корректный номер телефона"),
    message: z
        .string().min(5, "Сообщение слишком короткое")
});

type FormData = z.infer<typeof formDataSchema>;

type PopUpProps = {
    onClose: () => void;
}

const initialFormState: FormData = {
    name: '',
    tel: '',
    message: ''
}

export const PopUp = forwardRef<HTMLDialogElement, PopUpProps>(({ onClose }, ref) => {

    const dialogRef = ref as React.RefObject<HTMLDialogElement>

    const handleClose = () => {
        document.body.style.overflow = '';
        onClose();
    };


    const [userFormData, setUserFormData] = useState<FormData>(initialFormState)
    const [showErrors, setShowErrors] = useState<boolean>(false)
    const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

    const validateField = (field: keyof FormData, value: string) => {
        const partialData = { ...userFormData, [field]: value };
        const result = formDataSchema.safeParse(partialData);
        return result.success || result.error.format()?.[field]?._errors[0];
    };


    const validate = () => {
        const result = formDataSchema.safeParse(userFormData);
        return result.success ? null : result.error.format();
    };

    const reset = () => setUserFormData(initialFormState)


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errors = validate()
        if (errors) {
            setShowErrors(true)
            return
        }

        console.log("Форма отправлена:", userFormData);
        reset();
        handleClose();
        setShowErrors(false)
        setCurrentStep(1)
    }


    const errors = showErrors ? validate() : undefined;


    // принимает на вход любое поле формы, проверяет, если в ошибках наше поле, если да, возвращает его ошибки
    const getFieldError = (field: keyof FormData, errorsObj?: ReturnType<typeof validate>): string | null => {
        if (!showErrors || !errorsObj) return null;
        return errorsObj[field]?._errors[0] || null;
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
            className={styles.dialog}
            onClose={handleClose} >

            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>НАПИСАТЬ НАМ</h2>

                <ul className={styles.progress}>
                    <li className={clsx(styles.dot, currentStep >= 1 && styles.active)} />
                    <li className={clsx(styles.dot, currentStep >= 2 && styles.active)} />
                    <li className={clsx(styles.dot, currentStep >= 3 && styles.active)} />
                </ul>


                {/* ИМЯ */}
                <div className={styles.item}>
                    <input
                        className={styles.input}
                        required
                        type="text"
                        id='name'
                        placeholder=" "
                        value={userFormData.name}
                        onChange={(e) => {
                            const value = e.target.value;
                            setUserFormData((prev) => ({ ...prev, name: value }));
                            setShowErrors(true)
                            if (!validateField('name', value)) {
                                setShowErrors(false)
                                setCurrentStep(2);
                            }
                        }}
                    />
                    <label htmlFor="name" className={styles.label}>Ваше имя</label>
                    {(getFieldError('name', errors)) && <p className={styles.error}>{getFieldError('name', errors)}</p>}
                </div>

                {/* ТЕЛЕФОН */}
                <div className={styles.item}>
                    <input
                        type="tel"
                        id="telephone"
                        className={styles.input}
                        required
                        placeholder=" "
                        value={userFormData.tel}
                        disabled={currentStep < 2}
                        onChange={(e) => {
                            const value = formatPhone(e.target.value);
                            setUserFormData((prev) => ({ ...prev, tel: value }));
                            setShowErrors(true)
                            if (!validateField('tel', value)) {
                                setShowErrors(false)
                                setCurrentStep(3);
                            }
                        }}
                    />
                    <label htmlFor="telephone" className={styles.label}>Ваш телефон</label>
                    {(getFieldError('tel', errors) && currentStep > 1) && <p className={styles.error}>{getFieldError('tel', errors)}</p>}
                </div>



                {/* СООБЩЕНИЕ */}

                <div className={styles.item}>
                    <textarea
                        id='message'
                        maxLength={200}
                        className={clsx(styles.input, styles.textArea)}
                        value={userFormData.message}
                        required
                        disabled={currentStep < 3}
                        placeholder=" "
                        onChange={(e) => {
                            const value = e.target.value;
                            const newData = { ...userFormData, message: value };
                            setUserFormData(newData);
                            setShowErrors(true)
                            if (validateField('message', value) === true) {
                                setCurrentStep(4);
                            }
                        }}
                    />
                    <label className={styles.label} htmlFor="message">Ваше сообщение</label>
                    {(getFieldError('message', errors) && currentStep > 2) && <p className={styles.error}>{getFieldError('message', errors)}</p>}
                </div>




                {/* Добавить логику отправки */}

                <BasicButton disabled={currentStep < 4} type="submit" content='ОТПРАВИТЬ' />
                <p className={styles.policy}>Нажимая кнопку “Отправить” вы даёте своё согласие на обработку персональных данных</p>

                <button className={styles.crossButton} onClick={handleClose}>
                    <Image src={'/PopUp/Cross.svg'} width={19} height={19} aria-label='Закрыть PopUp окно' alt='' />
                </button >

            </form>

        </dialog >
    )
})
PopUp.displayName = 'PopUp'
