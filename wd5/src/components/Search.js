import React from "react";

const Search = (props)=>{
    return(
        <div style={styles.searchWrapper}>
            <div style={styles.searchContainer}>
                <form action="" onSubmit={props.handleSubmit}>
                    <input type="text" placeholder="Search for a Movie" onChange={props.handleChange}></input>
                </form>
            </div>
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
        
    }
}