import React, { useContext } from 'react';
import MovieContext from '../contexts/MovieContext';

function MoviesList() {
	const { movies, setMovies } = useContext(MovieContext);

	function deleteMovie(id) {
		const filteredMovies = movies.filter((movie) => movie.movie_id !== id);
		setMovies(filteredMovies);
	}

	return (
		<>
			<div>MoviesList</div>
			<ul>
				{movies.map((movie) => (
					<li key={movie.movie_id}>
						<span>{movie.title}</span>
						<button type='button' onClick={() => deleteMovie(movie.movie_id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	);
}

export default MoviesList;
