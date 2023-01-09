import React from "react";
import Movie from "./Movie";
import { Row } from 'react-bootstrap';

const MovieList = (props)=>{
    return(
        <div style={styles.container}>
            <Row className="class-name row row-cols-4">
                {
                    props.movies.map((movie, i) =>{
                        return(
                            <Movie key={i} viewDetails={props.viewDetails} title={movie.title} movieId={movie.id} image={movie.poster_path}/>
                        )
                    })
                }
            </Row>
        </div>
    )
    
}

export default MovieList;

const styles = {
    container:{
        paddingTop: "5rem"
    },

}