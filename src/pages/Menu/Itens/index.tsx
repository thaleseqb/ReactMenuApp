import Item from "./Item"
import menu from "./itens.json"
import styles from "./Itens.module.scss"

export default function Itens() {
    return (
        <div className={styles.itens}>
            {menu.map(item => {
                return (
                    <Item 
                        key={item.id} 
                        {...item}
                    />
                )
            })}
        </div>
    )
}