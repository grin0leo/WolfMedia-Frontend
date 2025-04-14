import styles from './item.module.css'
import { PointText } from './ui/PointText';
import { YearBlock } from './ui/Year';
import Image from 'next/image';

type RoadMapItem = {
    year: number | string;
    text: string
}


export function RoadMapItem({ year, text }: RoadMapItem) {
    return (
        <li className={styles.container}>
            <YearBlock year={year} />
            <Image className={styles.point} src='/About/Point.svg' alt='' aria-hidden={true} width={10} height={10} />
            <PointText text={text} />
        </li>
    )
}