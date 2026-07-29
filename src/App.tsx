
import "./App.css";
import MovieCard from "./components/MovieCard";
import { movies } from "./data/Movies";





function App() {
  return (
    <div className="movies-container">
      {
        movies.map((movie)=> (
        <MovieCard key={movie.id} movie={movie} />
        ))
      }
    </div>
  ) 
  
}

export default App
