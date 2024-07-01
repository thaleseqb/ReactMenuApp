import menu from "data/menu.json";
import styles from "./Begin.module.scss";
import ComponentMenu from "components/ComponentMenu";

export default function Begin() {
    
    let recomendedDishes = [...menu];

    recomendedDishes = recomendedDishes.sort(() => 0.5 - Math.random()).splice(0,3);

    return (
        <section >
            <h3 className={styles.title}>
                Recomendações da cozinha
            </h3>
            <div className={styles.recomendations}>
                {recomendedDishes.map(item => {
                    return (
                        <div key={item.id} className={styles.recomended}>
                            <div className={styles.recomended__image}>
                                <img src={item.photo} alt={item.title} />
                            </div>
                            <button className={styles.recomended__button}>
                                Ver mais
                            </button>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}