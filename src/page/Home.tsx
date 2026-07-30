
import "../App.css";
import MovieCard from "../components/MovieCard";
import { movies } from "../data/Movies";





function HomePage() {
return (
    <div className="movies-container">
    {
        movies.map((movie)=> (
        <MovieCard key={movie.id+movie.titulo} movie={movie} />
        ))
    }
    </div>
) 
}

export default HomePage
