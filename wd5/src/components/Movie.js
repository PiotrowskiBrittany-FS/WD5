import React from "react";
import {Card} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Container} from 'react-bootstrap';

const Movie = (props)=>{
    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <Card style={{width: "18rem"}}>
                        <Card.Body style={styles.cardContainer}>
                            <section style={styles.card}>
                                {
                                    props.image == null ? <img src={`https://www.prokerala.com/movies/assets/img/no-poster-available.jpg`} alt="card image" style={styles.images} />: <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={styles.images}/> 
                                }
                                <Card.Title style={styles.text}>{props.title}</Card.Title>
                                <a href="#" onClick={()=> props.viewDetails(props.movieId)} style={styles.button}>View Details</a>
                            </section>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Movie;

const styles = {
    cardContainer: {
        marginLeft: "5rem"
    },
    card:{
        backgroundColor: "#fff",
        height: "30rem",
        marginTop: "2rem",
        color: "#000",
        paddingBottom: "5rem",
        paddingTop: "1rem",
        backgroundColor: "#fff",
        width: "15rem",
        paddingLeft: "1rem",
        paddingRight: "1rem"
    },
    text: {
        marginBotton: "1rem",
        paddingBottom: "1.5rem",
        fontWeight: "bold",
        paddingTop: "0.2rem"
    },
    button: {
        borderStyle: "solid",
        borderWidth: "0px",
        borderRadius: "10px",
        padding: "0.25rem",
        marginTop: "2rem",
        backgroundColor: "#F2B705",
        textDecoration: "none",
        color: "#000",
        boxShadow: "2px 2px 5px #888",
        display: "flex",
        alignSelf: "flex-end",
        justifyContent: "center",
        marginBottom: "1rem"
    },
    images:{
        width: "15rem",
        height: "25rem",
    },

}