import React, {Component} from "react";

//Components 
import Search from "../components/Search";
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import MovieDetails from '../components/MovieDetails';


class SearchMovies extends Component{
    constructor(){
      super()
      this.state = {
        movies: [],
        userSearch: '',
        totalMovies: 0,
        currentPage: 1,
        currentMovie: null
      }
      this.apiKey = 'd90675c6ac13f9cd080926e402046ab1'
      //API key for The Movie Database
    }
  
    //Function to handle the form submission and find the users search results
    handleSubmit = (e)=>{
      e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.userSearch}`)
        .then(data => data.json())
        .then(data => {
          console.log(data);
          this.setState({movies: [...data.results], totalMovies: data.total_results})
        })
    } 
  
    //Function to handle the form submission changes and return the target value
    handleChange = (e)=>{
      e.preventDefault();
      this.setState({userSearch: e.target.value})
    }
  
    //Function to show the pages of the returned results
    nextPage = (pageNumber)=>{
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.userSearch}&page=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({movies: [...data.results], currentPage: pageNumber})
      })
    }
  
    //Function for viewing the movie details
    viewDetails = (id)=>{
      const chosenMovie = this.state.movies.filter(movie => movie.id === id)
  
      const selectedMovie = chosenMovie.length > 0 ? chosenMovie[0] : null
      this.setState({ currentMovie: selectedMovie})
    }
    
    //Function for closing the details of the movie
    closeDetails = ()=>{
      this.setState({currentMovie: null})
    }
  
    render(){
      const numberPages = Math.floor(this.state.totalMovies / 20);
      return(
        <div style={styles.container}>
          <div style={styles.wrapper}>
          <h2 style={styles.heading}>Search for a Movie</h2>
            {this.state.currentMovie == null ? 
              <div style={styles.movies}>
                <Search style={styles.search} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                      <MovieList style={styles.list} viewDetails={this.viewDetails} movies={this.state.movies}/>
              </div> : <MovieDetails style={styles.details} currentMovie={this.state.currentMovie} closeDetails={this.closeDetails}/>
            }
            
            {this.state.totalMovies > 20 && this.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
            {/* if movie results is more than 20, the pagination bar will show */}
          </div>
        </div>
      )
    }
  }
  
  
  export default SearchMovies;
  
  
  
  const styles = {
    container: {
      backgroundColor: "#fff",
      borderRadius: '10px'
    },
    wrapper: {
      margin: "1rem",
      
    },
    heading:{
      textAlign: 'center',
      paddingTop: '1.25rem'
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