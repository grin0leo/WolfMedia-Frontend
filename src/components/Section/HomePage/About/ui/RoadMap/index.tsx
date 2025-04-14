import { RoadMapItem } from '../RoadMapItem'
import styles from './roadMap.module.css'
import clsx from 'clsx'

export function RoadMap({ className }: { className?: string }) {

    // TODO посмотреть как сделать strong 

    const roadMapItems = [
        {
            year: 2014,
            text: `С 1 паблика выросли до сетки из 50 сообществ`
        },
        {
            year: 2015,
            text: 'Первый миллион подписчиков'
        },
        {
            year: 2016,
            text: 'Активный рост сообществ и аудитории'
        },
        {
            year: 2017,
            text: 'Открытие собственного офиса, переход от виртуальной команды к реальной,запуск видео- продакшена'
        },
        {
            year: 2018,
            text: 'Разработан собственный софт по сбору детальной статистики'
        },
        {
            year: 2019,
            text: 'Агрегация сообществ под управление WolfMedia'
        }

    ]

    return (


        <ul className={clsx(className, styles.line,)}>
            {roadMapItems.map((el, index) => (
                <RoadMapItem year={el.year} text={el.text} key={index} />
            ))}

        </ul>


    )
}