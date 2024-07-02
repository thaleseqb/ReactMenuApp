import styles from "./Menu.module.scss"
import { ReactComponent as Logo} from "../../assets/logo.svg"
import Searcher from "./Searcher"
import React, { useState } from "react"
import Filters from "./Filters";
import Orderer from "./Orderer";
import Itens from "./Itens";
import ComponentMenu from "components/ComponentMenu";

export default function Menu() {

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<number | null>(null);
    const [orderer, setOrderer] = useState("");

    return (
        <section className={styles.smenu}>
            <h3 className={styles.smenu__title}>
                Cardápio
            </h3>
            <Searcher 
                search={search} 
                setSearch={setSearch} 
                />
            <div className={styles.smenu__filters}>
                <Filters filter={filter} setFilter={setFilter}/>
                <Orderer orderer={orderer} setOrderer={setOrderer} />
            </div>
            <Itens 
                search={search} 
                filter={filter} 
                orderer={orderer} 
                />
        </section>
    )
}