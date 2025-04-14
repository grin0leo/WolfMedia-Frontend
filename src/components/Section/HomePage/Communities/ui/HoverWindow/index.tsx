import Image from 'next/image'
import styles from './hoverWindow.module.css'
import clsx from 'clsx'


export function HoverWindow({ className }: { className: string }) {

    const icons: { imgSrc: string, text: string }[] = [
        {
            imgSrc: '/Communities/HoverWindow/pet.svg',
            text: 'Дай лапу'
        },
        {
            imgSrc: '/Communities/HoverWindow/women.svg',
            text: 'Пушистые лапки'

        },
        {
            imgSrc: '/Communities/HoverWindow/mask.svg',
            text: 'Мокрый нос'
        }]

    return (
        <div className={clsx(styles.window, className)}>
            <div className={styles.triangle}></div>
            <div className={styles.content}>
                {icons.map((el, index) => (
                    <figure key={index} className={styles.item}>
                        <Image className={styles.icon} src={el.imgSrc} alt={`Иконка ${el.text}`} width={80} height={80} />
                        <figcaption className={styles.text}>
                            {el.text}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </div>
    )
}