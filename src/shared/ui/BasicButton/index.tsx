import clsx from "clsx";
import styles from './button.module.css'

type Button = {
    color?: 'white' | 'orange';
    size?: 'small' | 'bit';
    content: string;
    className?: string
}

export function BasicButton(
    {
        color = 'orange',
        size = 'small',
        content,
        className
    }: Button) {

    return (
        <button className={clsx(styles.button, styles[color], styles[size], className)}>
            {content}
        </button>
    )

}