import React from "react";
import {Link} from 'react-router-dom';

const Navigation = ()=>{
    return(
        <nav>
            <div>
                <h1>Popcorner</h1>
                <Link style={styles.links} to='/popularmovies'>Popular Movies</Link>
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
