import Tags from "components/Tags";
import styles from "./Item.module.scss"
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/prato/${id}`)} 
            className={styles.item}
        >
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
                <Tags 
                    size={size}
                    serving={serving}
                    price={price}
                    category={category}
                />
            </div>
        </div>
    )
}