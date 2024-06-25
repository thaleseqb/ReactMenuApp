import filters from "./filters.json"
import styles from "./Filters.module.scss"

interface Option {
    id:number;
    label:string;
}

export default function Filters() {
    
function selcetFilter(option: Option){}

    return (
        <div className={styles.filters}>
            {filters.map((option) => (
                <button 
                    className={styles.filters__filter}
                    key={option.id}
                    onClick={() => selcetFilter(option)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    )
}