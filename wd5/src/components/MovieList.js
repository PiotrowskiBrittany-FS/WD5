import React from "react";
import Movie from "./Movie";

const MovieList = (props)=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    {
                        props.movies.map((movie, i) =>{
                            return(
                                <Movie key={i} viewDetails={props.viewDetails} movieId={movie.id} image={movie.poster_path}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
    
}

export default MovieList;