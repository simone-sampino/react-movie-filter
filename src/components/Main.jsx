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

  useEffect(() => {
    if (selectedGenre === '') {
      setFilteredMovies(moivesAr);
    } else {
      const filtered = moivesAr.filter(movie => movie.genre === selectedGenre);
      setFilteredMovies(filtered);
    }
  }, [selectedGenre]);

  const genres = [...new Set(moivesAr.map(movie => movie.genre))];

  return (
    <div className="container mt-5">
        <div className="mb-3">
            <select id="genre-select" className="form-select form-select-lg" value={selectedGenre} onChange={e => setSelectedGenre(e.target.value)}>
                <option value="">Seleziona genere</option>
                {genres.map((genre, index) => (
                    <option key={index} value={genre}>{genre}</option>
                ))}
            </select>
        </div>

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
};