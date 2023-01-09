import React from "react";
import Movie from "./Movie";

const MovieList = (props)=>{
    return(
        <div style={styles.container}>
            <div style={styles.row}>
                {
                    props.movies.map((movie, i) =>{
                        return(
                            <Movie key={i} viewDetails={props.viewDetails} movieId={movie.id} image={movie.poster_path}/>
                        )
                    })
                }
            </div>
        </div>
    )
    
}

export default MovieList;

const styles = {
    container:{
        paddingTop: "5rem"
    },

}