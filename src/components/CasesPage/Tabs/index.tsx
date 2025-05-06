import Link from 'next/link';
import styles from './tabs.module.css'
import clsx from 'clsx';


type TabsBlockProps = {
    actualTab: string
}

export function TabsBlock({ actualTab }: TabsBlockProps) {

    const tabs = [
        { name: 'Все', route: '' },
        { name: 'Дизайн', route: 'design' },
        { name: 'Аналитика', route: 'analytics' },
        { name: 'Разработка', route: 'development' },
    ]
    return (

        <ul className={styles.list}>
            {tabs.map((tab, i) => (
                <Link
                    href={tab.route ? `?category=${tab.route}` : '/cases'}
                    key={i}
                >
                    <li className={clsx(styles.item, tab.route === actualTab ? styles.active : '')}>
                        {tab.name}
                    </li>
                </Link>
            ))}
        </ul>

    )
}