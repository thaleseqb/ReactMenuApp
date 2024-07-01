import { ReactComponent as Logo } from "assets/logo.svg"
import styles from "./ComponentMenu.module.scss"

export default function ComponentMenu() {
    return (
        <nav className={styles.menu}>
            <Logo/>
        </nav>
    )
}