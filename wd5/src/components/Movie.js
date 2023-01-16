import React from "react";
import {Card} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Container} from 'react-bootstrap';

const Movie = (props)=>{
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <Card style={{width: "18rem"}}>
                        <Card.Body>
                            <section style={styles.card}>
                                {
                                    props.image == null ? <img src={`https://www.prokerala.com/movies/assets/img/no-poster-available.jpg`} alt="card image" style={styles.images} />: <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={styles.images}/> 
                                }
                            </section>
                        
                            <Card.Title  style={styles.cardText}>{props.title}</Card.Title>
                            <a href="#" onClick={()=> props.viewDetails(props.movieId)}>View Details</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Movie;

const styles = {
    card:{
        backgroundColor: "#fff",
        padding: "2rem",
        width: "10rem",
        height: "25rem"
    },
    images:{
        width: "15rem",
        height: "25rem"
    },
    cardText: {
        color: "#000",
        paddingBottom: "0.5rem"
    }
}