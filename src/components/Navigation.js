import React from "react";
import {Link} from 'react-router-dom';

const Navigation = ()=>{
    return(
        <div style={styles.container}>
            <Link to="/Home"> Popcorner </Link>
            <Link style={styles.links} to="/SearchMovies">Search Movies</Link>
            <Link style={styles.links} to='/PopularMovies'>Popular Movies</Link>
        </div>
    )
}
export default Navigation;

const styles ={
    container: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    links:{
        padding: '0.50rem',
        color: '#000',
        textDecoration: 'none',
        borderStyle: 'solid',
        borderWidth: '0px',
        borderRadius: '10px',
        cursor: 'pointer',
        boxShadow: "2px 2px 5px #888",
        backgroundColor: '#F2B705',
        fontWeight: 'bold'
    },

}