'use client'
import { forwardRef, useState } from 'react';
import Image from 'next/image';



import { BasicButton } from '@/shared/ui/BasicButton';
import { Stepper } from './ui/Stepper';

import styles from './popUp.module.css';
import { usePopUpForm } from './features/usePopUpForm';
import { FieldInput } from './ui/Field';
import { formatPhone } from './features/phoneMask';
import { SuccessPopup } from '../SuccessPopup';


type PopUpProps = {
    onClose: () => void;
};

export const PopUp = forwardRef<HTMLDialogElement, PopUpProps>(({ onClose }, ref) => {
    const dialogRef = ref as React.RefObject<HTMLDialogElement>;
    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    const {
        userFormData,
        setUserFormData,
        currentStep,
        setCurrentStep,
        handleClose,
        setShowErrors,
        validateField,
        getFieldError,
        handleSubmit
    } = usePopUpForm(onClose);

    return (
        <dialog
            ref={dialogRef}
            className={styles.dialog}
            onClick={(e) => {
                if (e.target === e.currentTarget) handleClose();
            }}
            onClose={handleClose}
        >
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>НАПИСАТЬ НАМ</h2>
                <Stepper currentStep={currentStep} />

                <FieldInput
                    id="name"
                    value={userFormData.name}
                    onChange={(val) => {
                        setUserFormData((prev) => ({ ...prev, name: val }));
                        setShowErrors(true);
                        if (validateField('name', val) === null) {
                            setShowErrors(false);
                            setCurrentStep(2);
                        }
                    }}
                    disabled={false}
                    error={getFieldError('name')}
                />


                <FieldInput
                    id="tel"
                    value={userFormData.tel}
                    onChange={(val) => {
                        const formatted = formatPhone(val);
                        setUserFormData((prev) => ({ ...prev, tel: formatted }));
                        setShowErrors(true);
                        if (validateField('tel', formatted) === null) {
                            setShowErrors(false);
                            setCurrentStep(3);
                        }
                    }}
                    disabled={currentStep < 2}
                    error={currentStep > 1 ? getFieldError('tel') : null}
                />

                <FieldInput
                    id='message'
                    isTextArea={true}
                    value={userFormData.message}
                    disabled={currentStep < 3}
                    onChange={(val) => {
                        setUserFormData((prev) => ({ ...prev, message: val }));
                        setShowErrors(true);
                        if (validateField('message', val) === null) {
                            setCurrentStep(4);
                            setShowErrors(false);
                        }
                    }}
                />

                {isSuccess && <SuccessPopup handleClose={() => {
                    handleClose()
                    setIsSuccess(false)
                }} />}


                <BasicButton onClick={() => setIsSuccess(true)} disabled={currentStep < 4} type="submit" content="ОТПРАВИТЬ" />
                <p className={styles.policy}>
                    Нажимая кнопку “Отправить” вы даёте своё согласие на обработку персональных данных
                </p>

                <button className={styles.crossButton} onClick={handleClose}>
                    <Image src="/PopUp/Cross.svg" width={19} height={19} alt="Закрыть PopUp окно" />
                </button>
            </form>
        </dialog>
    );
});
