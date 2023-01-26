import React, {Component} from "react";

import MovieList from '../components/MovieList';
import MovieDetails from '../components/MovieDetails';

class PopularMovies extends Component{
    constructor(){
        super()
        this.state = {
          movies: [],
          totalMovies: 0,
          currentMovie: null
        }
        this.apiKey = 'd90675c6ac13f9cd080926e402046ab1'
      }

      render(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`)
          .then(data => data.json())
          .then(data => {
            console.log(data);
            this.setState({movies: [...data.results], totalMovies: data.total_results})
          })
        return(
          <div style={styles.container}>
            <div style={styles.wrapper}>
                <h2>Popular Movies</h2>
              {this.state.currentMovie == null ? 
                <div style={styles.movies}>
                    <MovieList style={styles.list} viewDetails={this.viewDetails} movies={this.state.movies}/>
                </div> : <MovieDetails style={styles.details} currentMovie={this.state.currentMovie} closeDetails={this.closeDetails}/>
              }
            </div>
          </div>
        )
      }
}


export default PopularMovies;

const styles = {
    container: {
      backgroundColor: "#fff"
    },
    wrapper: {
      margin: "2rem",
    },
    movies: {
      display: "block",
    },
    search: {
      padding: "2rem",
    },
    list:{
      margin: "2rem",
      padding: "2rem",
    },
    details: {
      margin: "2rem"
    }
  }