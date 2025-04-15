import parse from 'html-react-parser';
import styles from './case.module.css'


type CaseProps = {
    title: string;
    tags: string;
    imgSrc: string;
}
export function Case({ title, tags, imgSrc }: CaseProps) {

    return (

        <article className={styles.textBlock}>

            {parse(`<header>${title}</header>`)}
            {parse(`<p>${tags}</p>`)}
            <img
                src={imgSrc}
                width={400}
                height={400}
                alt=""
                loading="lazy"
            />
        </article>


    )

}