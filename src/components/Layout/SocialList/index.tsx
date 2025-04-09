import Image from "next/image";
import styles from "./socialList.module.css";
import Link from "next/link";
import { socialLinks } from "./model/constants";


function SocialLink({ name, path, link }: { name: string; path: string; link: string }) {
    return (
        <li className={styles.item}>
            <Link href={link} aria-label={`Перейти в нашу группу ${name}`}>
                <Image src={path} alt={`Иконка ${name}`} width={24} height={24} />
            </Link>
        </li>
    )
}
export function SocialList() {
    return (
        <>
            {socialLinks.map((btn, index) => (
                <SocialLink key={index} name={btn[0]} path={btn[1]} link={btn[2]} />
            ))}
        </>
    )
}