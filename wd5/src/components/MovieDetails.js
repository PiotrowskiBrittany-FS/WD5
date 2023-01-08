import React from "react";

const MovieDetails = (props)=>{
    return(
        <div className="container">
            <div className="go-back" onClick={props.closeDetails}>
                <i className="back">X</i>
                <span>Go back</span>
            </div>
            <div className="image">
                {
                    props.currentMovie.poster_path === null ? <img src={`https://s3-ap-southeast1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image" style={{width: "100%", height: "360"}}/> : <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="card image" style={{width: "100%", height: "360"}}/>
                }
            </div>
            <div className="details">
                <p>{props.currentMovie.title}</p>
                <p>{props.currentMovie.release_date}</p>
                <p>{props.currentMovie.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetails;