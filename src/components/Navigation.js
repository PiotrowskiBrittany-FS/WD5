
import React from "react";
import {Link} from 'react-router-dom';

const Navigation = ()=>{
    return(
        <div>
            <Link style={styles.links} to="/Home"> Popcorner </Link>
            <Link style={styles.links} to="/SearchMovies">Search Movies</Link>
            <Link style={styles.links} to='/PopularMovies'>Popular Movies</Link>
        </div>
    )
}
export default Navigation;

const styles ={
    links:{
        display: 'flex',
        paddingRight: '2rem',
        color: '#000'
    }
}