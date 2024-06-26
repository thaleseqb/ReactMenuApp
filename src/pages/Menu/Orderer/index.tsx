import React, { useState } from "react"
import styles from "./Orderer.module.scss"
import options from "./options.json"
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

interface Props {
    orderer:string,
    setOrderer: React.Dispatch<React.SetStateAction<string>>
}

export default function Orderer({orderer, setOrderer}: Props) {

    const [open, setOpen] = useState(false);

    function fillField(orderer: string): string {
        const [option] = options.filter((option) => {
            return option.value === orderer; 
        });
        
        return option.name === "" ? "Ordenar por" : option.name;
    }

    return (
        <button 
            onBlur={() => setOpen(false)}
            className={classNames({
                [styles.orderer]:true,
                [styles["orderer--active"]]: orderer !== ""
            })} 
            onClick={() => setOpen(!open)}
        >
            <span>{fillField(orderer)}</span>
            {open 
            ? <MdKeyboardArrowUp size={20}/> 
            : <MdKeyboardArrowDown size={20} />
            }
            <div className={classNames({
                [styles.orderer__options]: true,
                [styles["orderer__options--active"]]:open
            })}>
                {options.map(option => (
                    <div 
                        onClick={() => setOrderer(option.value)}
                        className={styles.orderer__option} 
                        key={option.value}
                    >
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    )
}