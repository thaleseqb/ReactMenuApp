import classNames from "classnames";
import styles from "./Tags.module.scss"

interface Props {
    size: number;
    serving: number;
    price:number;
    category: Icategory
}

interface Icategory {
    id:number;
    label:string;
}

export default function Tags({
    size,
    serving,
    price,
    category
}:Props) {
    return (
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
            <div className={styles.item__qttpeople} >
                Serve {serving} pessoa{serving === 1 ? "":"s"}
            </div>
            <div className={styles.item__price}>
            R$ {price.toFixed(2)}
            </div>
        </div>
    )
}