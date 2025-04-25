import clsx from 'clsx';
import styles from './field.module.css';

type Props = {
    id: 'name' | 'tel' | 'message';
    value: string;
    onChange: (val: string) => void;
    error?: string | null;
    disabled: boolean;
    isTextArea?: boolean;
};

const placeholders = {
    name: 'Ваше имя',
    tel: 'Ваш телефон',
    message: 'Ваше сообщение'

};

const inputTypes = {
    name: 'text',
    tel: 'tel',
    message: ''
};

export const FieldInput = ({ value, onChange, error, id, disabled, isTextArea = false }: Props) => {
    return (
        <div className={styles.item}>
            {isTextArea ? (
                <textarea
                    className={clsx(styles.input, styles.textArea)}
                    required
                    id={id}
                    placeholder=" "
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    disabled={disabled}
                />
            ) : (
                <input
                    className={styles.input}
                    required
                    type={inputTypes[id]}
                    id={id}
                    placeholder=" "
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    disabled={disabled}
                />
            )}
            <label htmlFor={id} className={styles.label}>{placeholders[id]}</label>
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};