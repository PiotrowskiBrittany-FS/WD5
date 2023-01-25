import React from "react";

const MovieDetails = (props)=>{
    return(
        <div className="container">
            <div className="go-back" onClick={props.closeDetails}>
                <span style={styles.back}>Go back</span>
            </div>
            <div className="image">
                {
                    props.currentMovie.poster_path === null ? <img src={`https://www.prokerala.com/movies/assets/img/no-poster-available.jpg`} alt="card image" style={styles.images}/> : <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="card image" style={styles.images}/>
                }
            </div>
            <div className="details" style={styles.detail}>
                <p style={styles.info}>Title: </p>
                <p>{props.currentMovie.title}</p>
                <p style={styles.info}>Release Date: </p>
                <p>{props.currentMovie.release_date.substring(5).split("-").concat(props.currentMovie.release_date.substring(0, 4)).join("/")}</p>
                {/* Capture the date and use a substring of 5 to return up to the 5th index in order to flip the year to the back of the string */}
                <p style={styles.info}>About: </p>
                <p>{props.currentMovie.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetails;

const styles ={
    container:{
        display: "flex",
        justifyContent: "space-between"
    },
    back: {
        borderStyle: "solid",
        borderWidth: "0.25px",
        borderRadius: "10px",
        cursor: "pointer",
        marginBottom: "2rem",
        padding: "0.5rem",
        backgroundColor: "#F2B705"
    },
    images:{
        paddingTop: "2rem",
        width: "15rem",
        height: "25rem"
    },
    info:{
        fontWeight: "bold",
        paddingTop: "1rem"
    }
}