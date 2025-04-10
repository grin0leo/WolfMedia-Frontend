import Image from "next/image";
import styles from "./socialList.module.css";
import Link from "next/link";
import { socialLinks } from "./model/constants";

export function SocialList() {
    return (
        <>
            {socialLinks.map((btn, index) => (
                <li className={styles.item}>
                    <Link key={index} href={btn[2]} aria-label={`Перейти в нашу группу ${btn[0]}`}>
                        <Image src={btn[1]} alt={`Иконка ${btn[0]}`} width={24} height={24} />
                    </Link>
                </li>
            ))}
        </>
    )
}