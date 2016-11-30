import React from 'react'
import { movies } from '../data'

const Movies = (props) => {
    return (
        <div>
          <h1>Movies Page</h1>
          {movies.map((movie) => (
            <div>
            Title: {movie.title}
            Time: {movie.time}
            Genres: {movie.genres.map((genre) => (
              <ul>
                {genre}
              </ul>
            ))}
            </div>
          ))}
        </div>
    )
}

module.exports = Movies
