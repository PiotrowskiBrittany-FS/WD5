import React from "react";
import {Link} from 'react-router-dom';

const Navigation = ()=>{
    return(
        <nav>
            <div>
                <Link to="/Home"> Home </Link>
                <Link to="/SearchMovies">Search Movies</Link>
                <Link style={styles.links} to='/PopularMovies'>Popular Movies</Link>
            </div>
        </nav>
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
