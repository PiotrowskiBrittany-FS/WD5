import React from "react";

const Search = (props)=>{
    return(
        <div className="search-wrapper">
            <div className="search-container">
                <form action="" onSubmit={props.handleSubmit}>
                    <input type="text" placeholder="Search for a Movie" onChange={props.handleChange}></input>
                </form>
            </div>
        </div>
    )
}

export default Search;