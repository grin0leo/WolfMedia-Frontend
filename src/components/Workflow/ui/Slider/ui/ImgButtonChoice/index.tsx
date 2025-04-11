
import styles from './imgButtonChoice.module.css'
import Image from "next/image";

export function ImgButtonChoice({ iconSrc, func }: { iconSrc: string; func: () => void }) {

    return (
        <li className={styles.element}>
            <button className={styles.button} onClick={() => func()}>
                <Image className={styles.img} src={`/Workflow/Slider/${iconSrc}`} width={216} height={122} alt="Картинка" />
            </button>
        </li>
    )
}