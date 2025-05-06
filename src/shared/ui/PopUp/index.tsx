'use client'
import { forwardRef, useState } from 'react';
import Image from 'next/image';

import { BasicButton } from '@/shared/ui/BasicButton';
import { Stepper } from './ui/Stepper';

import styles from './popUp.module.css';
import { usePopUpForm } from './features/usePopUpForm';
import { FieldInput } from './ui/Field';
import { SuccessPopup } from '../SuccessPopup';
import { useFieldChange } from './features/handleOnChange';

type PopUpProps = {
    onClose: () => void;
};

export const PopUp = forwardRef<HTMLDialogElement, PopUpProps>(({ onClose }, ref) => {
    const dialogRef = ref as React.RefObject<HTMLDialogElement>;
    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    const {
        userFormData,
        currentStep,
        handleClose,
        getFieldError,
        handleSubmit,
        setUserFormData,
        setShowErrors,
        validateField,
        setCurrentStep,

    } = usePopUpForm(onClose);

    const { handleFieldChange } = useFieldChange({
        setUserFormData,
        setShowErrors,
        validateField,
        setCurrentStep,
    });

    const clickOutside = (e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === e.currentTarget) handleClose();
    };

    return (
        <dialog
            ref={dialogRef}
            className={styles.dialog}
            onClick={clickOutside}
            onClose={() => {
                handleClose()
                setIsSuccess(false)
            }}
        >
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>НАПИСАТЬ НАМ</h2>
                <Stepper currentStep={currentStep} />

                <FieldInput
                    id="name"
                    value={userFormData.name}
                    onChange={(val) => handleFieldChange('name', val)}
                    disabled={false}
                    error={getFieldError('name')}
                />

                <FieldInput
                    id="tel"
                    value={userFormData.tel}
                    onChange={(val) => handleFieldChange('tel', val)}
                    disabled={currentStep < 2}
                    error={currentStep > 1 ? getFieldError('tel') : null}
                />

                <FieldInput
                    id='message'
                    isTextArea={true}
                    value={userFormData.message}
                    disabled={currentStep < 3}
                    onChange={(val) => handleFieldChange('message', val)}
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