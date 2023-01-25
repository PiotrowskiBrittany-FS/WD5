import React, {Component} from 'react';
import {Router, Routes, Route} from 'react-router-dom'

//Components
import Navigation from "./components/Navigation";


//Routes
import PopularMovies from './pages/PopularMovies';
import Home from './pages/Home';

function App(){
  return(
    <div style={styles.wrapper}>
      <Navigation />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />}/>
          <Route path="/PopularMovies" element={<PopularMovies />} />
        </Routes>
      </div>
    </div>
  )
}


export default App;



const styles = {
  wrapper: {
    margin: "2rem",
    backgroundColor: "#fff"
  },
}
