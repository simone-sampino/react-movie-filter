import { useState, useEffect } from "react";

const moivesAr = [
    {
        id: 1,
        title: 'Inception',
        genre: 'Fantascienza'
    },
    {
        id: 2,
        title: 'Il Padrino',
        genre: 'Thriller'
    },
    {
        id: 3,
        title: 'Titanic',
        genre: 'Romantico'
    },
    {
        id: 4,
        title: 'Batman',
        genre: 'Azione'
    },
    {
        id: 5,
        title: 'Interstellar',
        genre: 'Fantascienza'
    },
    {
        id: 6,
        title: 'Pulp Fiction',
        genre: 'Thriller'
    },
]

export default function Main() {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(moivesAr);

  return (
    <div className="container mt-5">
      <ul className="list-group">
        {filteredMovies.map((movie, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            <span>{movie.title}</span>
            <span>{movie.genre}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}