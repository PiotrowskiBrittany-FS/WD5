import React from "react";
import {Link} from 'react-router-dom';

const Home = () =>{
  return(
    <div>
      <h2>Movie Database</h2>
      <div style={styles.links}>
        <Link style={styles.route} to="/SearchMovies">Search Movies</Link>
        <Link style={styles.route} to='/PopularMovies'>Popular Movies</Link>
        <Link style={styles.route} to='/UpcomingMovies'>Upcoming Movies</Link>
        <Link style={styles.route} to='/TopMovies'>Top Rated Movies</Link>
      </div>
        
    </div>
  )
}

export default Home;

const styles ={
    links:{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '2rem',
        marginRight: '5rem',
        marginLeft: '5rem',
        flexWrap: "wrap",
        
    },
    route:{
        color: '#000',
        textDecoration: 'none',
        borderStyle: 'solid',
        padding: '2rem',
        borderRadius: '10px',
        borderWidth: '0px',
        cursor: 'pointer',
        boxShadow: "2px 2px 5px #888",
        backgroundColor: '#F2B705',
        fontWeight: 'bold',
        fontSize: '24px',
        width: '10rem',
        textAlign: 'center',
        margin: '1rem'
    }
}