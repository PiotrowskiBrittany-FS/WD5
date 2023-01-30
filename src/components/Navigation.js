import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../images/popcornerLogo.jpg'

const Navigation = ()=>{
    return(
        <div style={styles.container}>
            <Link style={styles.logo} to="/Home"> <img src={Logo} alt="logo"></img> </Link>
            <div style={styles.buttons}>
                <Link style={styles.links} to="/SearchMovies">Search Movies</Link>
                <Link style={styles.links} to='/PopularMovies'>Popular Movies</Link>
                <Link style={styles.links} to='/UpcomingMovies'>Upcoming Movies</Link>
                <Link style={styles.links} to='/TopMovies'>Top Rated Movies</Link>
            </div>
        </div>
    )
}
export default Navigation;

const styles ={
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    logo:{
        fontSize: '36px',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '#000'
    },
    buttons:{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
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
        marginRight: '1rem',
        width: '10rem',
        textAlign: 'center',
        height: '1rem'
    },

}