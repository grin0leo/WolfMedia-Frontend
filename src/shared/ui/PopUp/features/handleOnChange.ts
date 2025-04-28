import { usePopUpForm } from "./usePopUpForm";
import { formatPhone } from './phoneMask';
type Params = {
    setUserFormData: ReturnType<typeof usePopUpForm>['setUserFormData'];
    setShowErrors: ReturnType<typeof usePopUpForm>['setShowErrors'];
    validateField: ReturnType<typeof usePopUpForm>['validateField'];
    setCurrentStep: ReturnType<typeof usePopUpForm>['setCurrentStep'];
};
export function useFieldChange({
    setUserFormData,
    setShowErrors,
    validateField,
    setCurrentStep,
}: Params) {

    const handleFieldChange = (
        field: 'name' | 'tel' | 'message',
        value: string
    ) => {
        let newValue = value;

        if (field === 'tel') {
            newValue = formatPhone(value);
        }

        setUserFormData((prev) => ({ ...prev, [field]: newValue }));
        setShowErrors(true);

        if (validateField(field, newValue) === null) {
            setShowErrors(false);
            setCurrentStep(
                field === 'name' ? 2 :
                    field === 'tel' ? 3 :
                        4
            );
        }
    };

    return { handleFieldChange };
}
