import Image from "next/image";
import styles from "./socialList.module.css";


function SocialLink({ name, path, link }: { name: string; path: string; link: string }) {
    return (
        <li className={styles.item}>
            <a href={link} aria-label={`Перейти в нашу группу ${name}`}>
                <Image src={path} alt={`Иконка ${name}`} width={24} height={24} />
            </a>
        </li>
    )
}
export function SocialList() {
    const socialLinks = [['ВК', '/Layout/VK.svg', 'https://vk.com'], ['Одноклассники', '/Layout/OK.svg', 'https://ok.ru'], ['Facebook', '/Layout/Facebook.svg', 'https://www.facebook.com'], ['Twitter', '/Layout/Twitter.svg', 'https://www.twitter.com']]

    return (
        <>
            {socialLinks.map((btn, index) => (
                <SocialLink key={index} name={btn[0]} path={btn[1]} link={btn[2]} />
            ))}
        </>
    )
}