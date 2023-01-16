import React from "react";
import Movie from "./Movie";
import {Container} from 'react-bootstrap';
import {Row}  from 'react-bootstrap';
import {Col} from 'react-bootstrap';

const MovieList = (props)=>{
    return(
        <Container>
            <Row>
                <Col sm={4}>
                <div style={styles.container}>
                {
                    props.movies.map((movie, i) =>{
                        return(
                            <Movie key={i} viewDetails={props.viewDetails} title={movie.title} movieId={movie.id} image={movie.poster_path}/>
                        )
                    })
                }
                </div>
                </Col>
            </Row>
        </Container>
        
    )
    
}

export default MovieList;

const styles = {
    container:{
        paddingTop: "5rem"
    },

}