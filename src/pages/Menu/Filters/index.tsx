import React from "react";
import filters from "./filters.json"
import styles from "./Filters.module.scss"
import classNames from "classnames";

interface Option {
    id:number,
    label:string
}

interface FilterTypeProps {
    filter: number | null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filters({filter, setFilter}: FilterTypeProps) {
    
    function selcetFilter(option: Option){

        if (filter===option.id) return setFilter(null);
        return setFilter(option.id);
    }

    return (
        <div className={styles.filters}>
            {filters.map((option) => (
                <button 
                    className={classNames({
                        [styles.filters__filter]: true,
                        [styles["filters__filter--active"]]:filter===option.id
                    })}
                    key={option.id}
                    onClick={() => selcetFilter(option)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    )
}