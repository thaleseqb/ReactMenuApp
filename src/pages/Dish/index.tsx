import classNames from "classnames";
import styles from "./Dish.module.scss"
import {useParams, useNavigate} from "react-router-dom"
import menu from "data/menu.json"

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
                    <div className={styles.tags}>
                        <div className={classNames({
                            [styles.tags__type_]:true,
                            [styles[`tags__type___${dish.category.label.toLowerCase()}`]]:true
                        })}>
                            {dish.category.label}
                        </div>
                        <div className={styles.tags__portion}>
                            {dish.size}g
                        </div>
                        <div className={styles.tags__qttpeople}>
                            Serve {dish.serving} pessoa{dish.serving === 1? "":"s"}
                        </div>
                        <div className={styles.tags__value}>
                            R$ {dish.price.toFixed(2)}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}