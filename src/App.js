
import React from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom'

//Components
import Navigation from "./components/Navigation";


//Routes
import PopularMovies from './pages/PopularMovies';
import SearchMovies from './pages/SearchMovies';
import Home from './pages/Home';
import UpcomingMovies from './pages/UpcomingMovies';
import TopMovies from './pages/TopMovies';

function App(){
  return(
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <Navigation />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home" element={<Home />}/>
            <Route exact path="/SearchMovies" element={<SearchMovies />}/>
            <Route path="/PopularMovies" element={<PopularMovies />} />
            <Route path="/UpcomingMovies" element={<UpcomingMovies />}/>
            <Route path="/TopMovies" element={<TopMovies/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}


export default App;



const styles = {
  container:{
    backgroundImage: "linear-gradient(purple, cyan)",
    height: "100%",
    width: "100%"
  },
  wrapper: {
    padding: "2rem",
    backgroundImage: "linear-gradient(purple, cyan)",
  },
}