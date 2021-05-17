import React, {useState} from "react";
import classes from "./paginator.module.css";


type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}

const Paginator = (props: PaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let[portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber -1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize


    return (
        <div>
            <div className={classes.paginator}>
                {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>}
            </div>
            {pages
                .filter( p => p >= leftPortionPageNumber && p <= rightPortionPageNumber )
                .map(p => {
                return <span className={props.currentPage === p ? classes.selectedPage : ''}
                             onClick={() => props.onPageChanged(p)}>{p}
                        </span>
            })}

            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
        </div>
    )
}

export default Paginator;