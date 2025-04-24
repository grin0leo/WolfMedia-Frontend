import clsx from "clsx";
import styles from './button.module.css'

type Button = {
    color?: 'white' | 'orange';
    size?: 'small' | 'bit';
    content: string;
    className?: string,
    onClick?: () => void,
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean
}

export function BasicButton(
    {
        color = 'orange',
        size = 'small',
        content,
        className,
        onClick, type = 'button',
        disabled = false

    }: Button) {

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={clsx(styles.button, styles[color], styles[size], className)}>
            {content}
        </button>
    )

}