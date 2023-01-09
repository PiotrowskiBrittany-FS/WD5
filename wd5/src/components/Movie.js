import React from "react";
import {Card} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

const Movie = (props)=>{
    return (
        <Row className="class-name row row-cols-4">
            <Card style={{width: "18rem"}}>
                <Card.Body>
                    <section style={styles.card}>
                        {
                            props.image == null ? <img src={`https://www.prokerala.com/movies/assets/img/no-poster-available.jpg`} alt="card image" style={styles.images} />: <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={styles.images}/> 
                        }
                    </section>
                
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle>{props.release_date}</Card.Subtitle>
                    <Card.Text>{props.overview}</Card.Text>
                    <a href="#" onClick={()=> props.viewDetails(props.movieId)}>View Details</a>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default Movie;

const styles = {
    card:{
        backgroundColor: "#fff",
        padding: "2rem",
    },
    images:{
        width: "15rem",
        height: "25rem"
    }
}