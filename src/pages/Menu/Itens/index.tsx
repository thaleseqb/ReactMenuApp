import { useEffect, useState } from "react";
import Item from "./Item"
import menu from "data/menu.json"
import styles from "./Itens.module.scss"

interface Props {
    search: string;
    filter: number | null;
    orderer: string;
}

export default function Itens({search, filter, orderer}:Props) {

    const [list, setList] = useState(menu);

    function testSearch(title: string): boolean {
        const regex = new RegExp(search, 'i');
        return regex.test(title);
    }

    function testFilter(id: number): boolean {
        if (filter !== null) {
            return filter === id;
        }
        return true;
    }

    function sort(newList: typeof menu) {
        switch (orderer) {
            case 'porcao':
                return newList.sort((a,b) => a.size > b.size ? 1:-1);
        
            case 'qtd_pessoas':
                return newList.sort((a,b) => a.serving > b.serving ? 1:-1);
            
            case 'preco':
                return newList.sort((a,b) => a.price > b.price ? 1:-1);
            
            default:
                return newList;
            }
    }

    useEffect( ()=> {
        const newList = menu.filter(item => testSearch(item.title) 
                                    && testFilter(item.category.id));
        setList(sort(newList));
    },[search, filter, orderer])

    return (
        <div className={styles.itens}>
            {list.map(item => {
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