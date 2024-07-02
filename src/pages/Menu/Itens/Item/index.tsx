import styles from "./Item.module.scss"
import classNames from "classnames";

interface Props {
    title: string;
    description:string;
    photo: string;
    size: number;
    serving: number;
    price:number;
    id:number;
    category: Icategory
}

interface Icategory {
    id:number;
    label:string;
}

export default function Item({
    title,
    description,
    photo,
    size,
    serving,
    price,
    id,
    category
}:Props) {
    return (
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={photo} alt="imagem" />
            </div>
            <div className={styles.item__description}>
                <div className={styles.item__title}>
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {description}
                    </p>
                </div>
                <div className={styles.item__tags}>
                    <div className={classNames({
                        [styles.item__types]: true,
                        [styles[`item__types__${category.label.toLocaleLowerCase()}`]]: true
                    })}>
                        {category.label}
                    </div>
                    <div className={styles.item__portion}>
                        {`${size}g`}
                    </div>
                    <div className={styles.item__qtdpeople} >
                        Serve {serving} pessoa{serving === 1 ? "":"s"}
                    </div>
                    <div className={styles.item__price}>
                    R$ {price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}