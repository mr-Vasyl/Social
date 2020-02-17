import React, {useState} from 'react'
import styles from './Paginator.module.css'
import cn from "classnames";
import {Button, Icon} from 'antd';
let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={styles.paginator}>

        { portionNumber > 1 &&
        <Button type="primary" onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}><Icon type="arrow-left" /></Button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <Button className={cn({
                    [styles.selectedPage]: currentPage === p
                }, styles.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</Button>
            })}
        {portionCount > portionNumber &&
        <Button type="primary" onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}><Icon type="arrow-right" /></Button>}

    </div>
}

export default Paginator;
