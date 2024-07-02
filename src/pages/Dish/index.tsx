import classNames from "classnames";
import styles from "./Dish.module.scss"
import {useParams, useNavigate} from "react-router-dom"
import menu from "data/menu.json"
import Tags from "components/Tags";

export default function Dish() { 
    
    const {id} = useParams();
    const navigate = useNavigate();
    const dish = menu.find(item => {
        return item.id === Number(id); 
    });

    if (!dish) {
        return '';
    }

    return (
        <>
            <button
                onClick={() => navigate(-1)} 
                className={styles.back}>
                {"< Voltar"}
            </button>
            <section className={styles.container}>
                <h1 className={styles.title}>{dish.title}</h1>
                <div className={styles.image}>
                    <img src={dish.photo} alt={dish.title} />
                </div>
                <div className={styles.content}>
                    <p className={styles.contente__description}>
                        {dish.description}
                    </p>
                    <Tags
                        size={dish.size}
                        serving={dish.serving}
                        price={dish.price}
                        category={dish.category}
                    />
                </div>
            </section>
        </>
    )
}