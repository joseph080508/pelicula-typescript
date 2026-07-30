import React from 'react'
import { movies } from '../data/Movies';
import { useLocation } from 'react-router';
import "../MovieDetails.css";

const MovieDetailsPage =() => {
const location = useLocation()
const idMovie: string = location.pathname.split('/')[2]
const currentMovie = movies[+idMovie-1]
return (
<div className="details-container">
    <div className="details-card">
        <img
            className="details-image"
            src={currentMovie.imagen}
            alt={currentMovie.titulo}
        />
        <div className="details-info">
            <h1 className="details-title">
                {currentMovie.titulo}
            </h1>
            <span className="details-rating">
                ⭐ {currentMovie.puntuacion}
            </span>
            <p>
                <strong>Año:</strong> {currentMovie.año}
            </p>
            <p>
                <strong>Género:</strong> {currentMovie.genero}
            </p>
            <p>
                <strong>Director:</strong> {currentMovie.director}
            </p>
            <p>
                <strong>Duración:</strong> {currentMovie.duracion} minutos
            </p>
            <p className="details-description">
                {currentMovie.descripcion}
            </p>
        </div>
    </div>
</div>
);
}

export default MovieDetailsPage;