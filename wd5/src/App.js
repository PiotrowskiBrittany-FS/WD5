import React, {Component} from 'react';
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import MovieDetails from './components/MovieDetails';

class App extends Component{
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

  }

  handleSubmit = (e)=>{
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.userSearch}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({movies: [...data.results], totalMovies: data.total_results})
    })
  }

  handleChange = (e)=>{
    e.preventDefault();
    this.setState({userSearch: e.target.value})
  }

  nextPage = (pageNumber)=>{
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.userSearch}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({movies: [...data.results], currentPage: pageNumber})
    })
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
    const numberPages = Math.floor(this.state.totalMovies / 20);
    return(
      <div style={styles.wrapper}>
        <Navigation />
        {this.state.currentMovie == null ? 
          <div style={styles.movies}>
            <Search style={styles.search} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            <MovieList style={styles.list} viewDetails={this.viewDetails} movies={this.state.movies}/>
          </div> : <MovieDetails style={styles.details} currentMovie={this.state.currentMovie} closeDetails={this.closeDetails}/>
        }
        
        {this.state.totalMovies > 20 && this.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
        {/* if movie results is more than 20, the pagination bar will show */}
      </div>
    )
  }
}





export default App;

const styles = {
  wrapper: {
    margin: "2rem"
  },
  movies: {
    display: "flex",
    width: "calc(50%/4 - 1rem)"
  },
  search: {
    display: "flex",
    justifyContent: "space-between",
    margin: "2rem",
    padding: "2rem",
    width: "15rem"
  },
  list:{
    margin: "2rem",
    padding: "2rem"
  },
  details: {
    margin: "2rem"
  }
}
