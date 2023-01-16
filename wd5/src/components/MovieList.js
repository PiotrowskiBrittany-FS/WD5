import React from "react";
import Movie from "./Movie";

const MovieList = (props)=>{
    return(
        <div style={styles.container}>
        {
            props.movies.map((movie, i) =>{
                return(
                    <Movie key={i} viewDetails={props.viewDetails} title={movie.title} movieId={movie.id} image={movie.poster_path}/>
                    )
                })
            }
        </div>
    )
    
}

export default MovieList;

const styles = {
    container:{
        paddingTop: "5rem",
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        flexDirection: "row"
    },

}