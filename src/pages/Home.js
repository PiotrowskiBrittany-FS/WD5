import React from "react";
import {Link} from 'react-router-dom';

const Home = () =>{
  return(
    <div>
      <h1>Popcorner</h1>
      <h2>Movie Database</h2>
      <div style={styles.links}>
        <Link style={styles.route} to="/SearchMovies">Search Movies</Link>
        <Link style={styles.route} to='/PopularMovies'>Popular Movies</Link>
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
    },
    route:{
        color: '#000',
        textDecoration: 'none',
        borderStyle: 'solid',
        padding: '0.25rem',
        borderRadius: '10px',
        cursor: 'pointer'
    }
}