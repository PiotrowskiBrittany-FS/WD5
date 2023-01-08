import React from "react";

const Pagination = (props)=>{
    const pageNum = []

    for(let i = 1; i <= props.pages + 1; i++){
        let active = props.currentPage === i ? 'active' : '';

        pageNum.push(<li className={active} key={i} onClick={()=> props.nextPage(i)}><a href="#">{i}</a></li>)
    }
    return(
        <div className="container">
            <div className="row">
                <ul className="pages">
                    {pageNum}
                </ul>
            </div>
        </div>
    )
}

export default Pagination;