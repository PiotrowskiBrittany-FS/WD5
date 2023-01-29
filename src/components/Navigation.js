import React from "react";
import {Link} from 'react-router-dom';

const Navigation = ()=>{
    return(
        <div style={styles.container}>
            <Link style={styles.logo} to="/Home"> Popcorner </Link>
            <div style={styles.buttons}>
                <Link style={styles.links} to="/SearchMovies">Search Movies</Link>
                <Link style={styles.links} to='/PopularMovies'>Popular Movies</Link>
                <Link style={styles.links} to='/UpcomingMovies'>Upcoming Movies</Link>
            </div>
        </div>
    )
}
export default Navigation;

const styles ={
    container: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    logo:{
        fontSize: '36px',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '#000'
    },
    buttons:{
        display: 'block',
    },
    links:{
        paddingTop: '0.50rem',
        paddingBottom: '0.50rem',
        paddingRight: '1.5rem',
        paddingLeft: '1.5rem',
        color: '#000',
        textDecoration: 'none',
        borderStyle: 'solid',
        borderWidth: '0px',
        borderRadius: '10px',
        cursor: 'pointer',
        boxShadow: "2px 2px 5px #888",
        backgroundColor: '#F2B705',
        fontWeight: 'bold',
        marginBottom: '1rem',
        marginRight: '1rem'
    },

}