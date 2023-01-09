import React from "react";
//import {Button, Container, Row, Card} from 'react-bootstrap';

const Movie = (props)=>{
    return (
        <article style={styles.container}>
            <section style={styles.card}>
                {
                    props.image == null ? <img src={`https://www.prokerala.com/movies/assets/img/no-poster-available.jpg`} alt="card image" style={styles.images} />: <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={styles.images}/> 
                }
                <a href="#" onClick={()=> props.viewDetails(props.movieId)}>View Details</a>
            </section>
        </article>
    )
}

export default Movie;

const styles = {
    container:{
        display: "flex",
        flexWrap: "wrap",
        width: "calc(50% / 4 - 1rem)",
    },
    card:{
        backgroundColor: "#fff",
        padding: "2rem",
    },
    images:{
        width: "15rem",
        height: "25rem"
    }
}