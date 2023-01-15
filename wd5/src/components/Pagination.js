import React from "react";

const Pagination = (props)=>{
    const pageNum = []

    for(let i = 1; i <= props.pages + 1; i++){
        let active = props.currentPage === i ? 'active' : '';

        pageNum.push(<li className={active} style={styles.active} key={i} onClick={()=> props.nextPage(i)}><a href="#" style={styles.links}>{i}</a></li>)
    }
    return(
        <div style={styles.container}>
            <div style={styles.row}>
                <ul style={styles.pages}>
                    {props.currentPage > 1 ? <li style={styles.prevnext} onClick={()=> props.nextPage(props.currentPage - 1)}><a href="#" style={styles.links}>Previous</a></li>: ''}
                    {pageNum}
                    {props.currentPage < props.pages + 1 ? <li style={styles.prevnext} onClick={()=> props.nextPage(props.currentPage + 1)}><a href="#" style={styles.links}>Next</a></li>: ''}
                </ul>
            </div>
        </div>
    )
}

export default Pagination;

const styles = {
    active:{
        fontWeight: "bold",
        padding: "0.25rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: "1px",
        padding: "10px",
        
    },
    container:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    row:{
        display: "flex",
        justifyContent: "space-between",
        padding: "0.25rem"
    },
    pages:{
        display: "flex",
        justifyContent: "space-between",
        listStyle: "none",
        padding: "0.25rem",
    },
    prevnext:{
        borderStyle: "solid",
        borderWidth: "1px",
        padding: "1rem",
    },
    links:{
        textDecoration: "none",
        color: "#000"
    }
}