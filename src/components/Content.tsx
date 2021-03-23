import { useEffect, useState } from 'react';
import { MovieCard } from '../components/MovieCard';
import '../styles/content.scss';

export function Content(props: ContentProps) {
  // Complete aqui

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="container">
        <header>
          <span className="category">Categoria:<span> {props.selectedGenre?.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {props.movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
    </div>
    )
}