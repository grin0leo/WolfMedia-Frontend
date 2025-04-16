import parse from 'html-react-parser';
import styles from './case.module.css'


type CaseProps = {
    title: string;
    tags: string;
    imgSrc: string;
}
export function Case({ title, tags, imgSrc }: CaseProps) {

    return (

        <article className={styles.container}>

            <img
                className={styles.img}
                src={imgSrc}

                alt=""
                loading="lazy"
            />
            <div className={styles.textBlock}>
                {parse(`<header class="${styles.label}">${title}</header>`)}
                {parse(`<p class="${styles.text}"> ${tags}</p>`)}
            </div>

        </article>


    )

}