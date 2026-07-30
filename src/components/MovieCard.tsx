import { Link } from "react-router"
import type Imovie from "../interface/movie.interface"


interface MovieCardProps {
    movie: Imovie
}



export const MovieCard = ({ movie }: MovieCardProps) => {
    return (

        <article className="movie-card">
            <div className="movie-image">
                <img
                    className="movie-poster"
                    src={movie.imagen}
                    alt={`Poster de ${movie.titulo}`}
                />

                <span className="movie-rating">
                    ⭐ {movie.puntuacion}
                </span>
            </div>

            <div className="movie-content">
                <header className="movie-header">
                    <h2 className="movie-title">
                        {movie.titulo}
                    </h2>

                    <span className="movie-year">
                        {movie.año}
                    </span>
                </header>

                <div className="movie-info">
                    <p>
                        <strong>Género:</strong> {movie.genero}
                    </p>

                    <p>
                        <strong>Director:</strong> {movie.director}
                    </p>

                    <p>
                        <strong>Duración:</strong> {movie.duracion} minutos
                    </p>
                </div>

                <p className="movie-description">
                    {movie.descripcion}
                </p>

                <Link
                    className="movie-button"
                    to={`/movies/${movie.id}`}
                >
                    Ver detalles
                </Link>
            </div>
        </article>
    );
}

export default MovieCard;