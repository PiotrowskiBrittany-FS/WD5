import React, {Component} from 'react';
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';

class App extends Component{
  constructor(){
    super()
    this.state = {
      movies: [],
      userSearch: '',
      totalMovies: 0,
      currentPage: 1
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

  // previousPage = (pageNumber)=>{
  //   fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.userSearch}&page=${pageNumber}`)
  //   .then(data => data.json())
  //   .then(data => {
  //     console.log(data);
  //     this.setState({movies: [...data.results], currentPage: pageNumber})
  //   })
  // }  

  render(){
    const numberPages = Math.floor(this.state.totalMovies / 20);
    return(
      <div className='App'>
        <Navigation />
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <MovieList movies={this.state.movies}/>
        {this.state.totalMovies > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
        {/* if movie results is more than 20, the pagination bar will show */}
      </div>
    )
  }


}





export default App;
