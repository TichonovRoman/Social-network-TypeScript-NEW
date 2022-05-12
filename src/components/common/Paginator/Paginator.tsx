import React, {useState} from 'react';
import styles from "./paginator.module.css";

type PaginatorPropsType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void
    currentPage: number,
}

const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}: PaginatorPropsType) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionSize = 5 // размер количества страниц для одновременного отображения

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div style={{paddingBottom: "5px"}}>
            {portionNumber > 1 && <button style={{backgroundColor: "bisque"}} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((c, index) => {
                    return <button style={{width: "40px"}} key={index}
                                   onClick={(e) => {
                                       onPageChanged(c)
                                   }}
                                   className={currentPage === c ? styles.selectedPage : ""}>{c}</button>
                })
            }
            {portionCount > portionNumber && <button style={{backgroundColor: "bisque"}} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button>}
        </div>
    );
};

export default Paginator;