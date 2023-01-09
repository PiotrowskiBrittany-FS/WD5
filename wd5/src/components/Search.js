import React from "react";

const Search = (props)=>{
    return(
        <div style={styles.searchWrapper}>
            <form action="" onSubmit={props.handleSubmit}>
                <input style={styles.searchContainer} type="text" placeholder="Search for a Movie" onChange={props.handleChange}></input>
            </form>
        </div>
    )
}

export default Search;

const styles = {
    searchWrapper:{
        display: "flex",
        justifyContent: "space-between"
    },
    searchContainer:{
        width: "50rem",
        height: "2rem"
    }
}