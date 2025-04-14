import clsx from "clsx";
import styles from './button.module.css'

type Button = {
    color?: 'white' | 'orange';
    size?: 'small' | 'bit';
    content: string;
    className?: string,
    onClick?: () => void
}

export function BasicButton(
    {
        color = 'orange',
        size = 'small',
        content,
        className,
        onClick
    }: Button) {

    return (
        <button onClick={onClick} className={clsx(styles.button, styles[color], styles[size], className)}>
            {content}
        </button>
    )

}