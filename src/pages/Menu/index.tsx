import styles from "./Menu.module.scss"
import { ReactComponent as Logo} from "../../assets/logo.svg"
import Searcher from "./Searcher"
import { useState } from "react"

export default function Menu() {

    const [search, setSearch] = useState("");

    return (
        <>
        <main>
            <nav className={styles.menu}>
            <Logo/>
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
        </main>

        <section className={styles.smenu}>
            <h3 className={styles.smenu__title}>
                Cardápio
            </h3>
            <Searcher 
                search={search} 
                setSearch={setSearch} 
            />
        </section>
        </>
    )
}