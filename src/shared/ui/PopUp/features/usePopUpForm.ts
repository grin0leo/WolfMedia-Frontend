import { useState } from 'react';
import { z } from 'zod';
import { formatPhone } from '../features/phoneMask';

const formDataSchema = z.object({
    name: z.string()
        .min(2, "Имя должно содержать хотя бы 2 символа")
        .regex(/^[A-Za-zА-Яа-яЁё\s]+$/, "Имя должно содержать только буквы"),
    tel: z.string().min(18, "Введите корректный номер телефона"),
    message: z.string().min(5, "Сообщение слишком короткое")
});

type FormData = z.infer<typeof formDataSchema>;

const initialFormState: FormData = {
    name: '',
    tel: '',
    message: ''
};

export const usePopUpForm = (onClose: () => void) => {

    const [userFormData, setUserFormData] = useState<FormData>(initialFormState);
    const [showErrors, setShowErrors] = useState(false);
    const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);


    const handleClose = () => {
        document.body.style.overflow = '';
        onClose();
    };

    const validate = () => {
        const result = formDataSchema.safeParse(userFormData);
        return result.success ? null : result.error.format();
    };
    const validateField = (field: keyof FormData, value: string) => {
        const partialData = { ...userFormData, [field]: value };
        const result = formDataSchema.safeParse(partialData);
        return result.success ? null : result.error.format()?.[field]?._errors[0] || null;
    };

    const reset = () => {
        setUserFormData(initialFormState);
        setCurrentStep(1);
        setShowErrors(false);
    };

    const getFieldError = (field: keyof FormData) => {
        if (!showErrors) return null;
        const errors = validate();
        return errors?.[field]?._errors[0] || null;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errors = validate();
        if (errors) {
            setShowErrors(true);
            return;
        }

        console.log("Форма отправлена:", userFormData);
        reset();
        onClose();
        setShowErrors(false);
        setCurrentStep(1);
    };

    return {
        userFormData,
        setUserFormData,
        currentStep,
        setCurrentStep,
        showErrors,
        setShowErrors,
        validateField,
        getFieldError,
        handleSubmit,
        validate,
        reset
    };

}
