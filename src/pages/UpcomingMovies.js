import React, {Component} from "react";

import MovieList from '../components/MovieList';
import MovieDetails from '../components/MovieDetails';

class UpcomingMovies extends Component{
    constructor(){
        super()
        this.state = {
          movies: [],
          totalMovies: 0,
          currentMovie: null
        }
        this.apiKey = 'd90675c6ac13f9cd080926e402046ab1'
      }

      viewDetails = (id)=>{
        const chosenMovie = this.state.movies.filter(movie => movie.id === id)
    
        const selectedMovie = chosenMovie.length > 0 ? chosenMovie[0] : null
        this.setState({ currentMovie: selectedMovie})
      }
      
      closeDetails = ()=>{
        this.setState({currentMovie: null})
      }

      render(){
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`)
          .then(data => data.json())
          .then(data => {
            console.log(data);
            this.setState({movies: [...data.results], totalMovies: data.total_results})
          })
          
        return(
          <div style={styles.container}>
            <div style={styles.wrapper}>
                <h2>Upcoming Movies</h2>
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


export default UpcomingMovies;

const styles = {
  container: {
    backgroundColor: "#fff"
  },
  wrapper: {
    margin: "1rem",
  },
  movies: {
    display: "block",
  },
  search: {
    padding: "1rem",
  },
  list:{
    margin: "1rem",
    padding: "1rem",
  },
  details: {
    margin: "1rem"
  }
}