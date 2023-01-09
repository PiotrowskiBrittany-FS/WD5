import React from "react";

const Movie = (props)=>{
    return (
        <article style={styles.container}>
            <section style={styles.card}>
                {
                    props.image == null ? <img src={`https://s3-ap-southeast1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image" style={styles.images} />: <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={styles.images}/> 
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

    },
    images:{
        width: "15rem",
        height: "25rem"
    }
}