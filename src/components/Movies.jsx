import React from 'react'
import Movie from './Movie'

const Movies = ({ movies = [] }) => {
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((item) => <Movie key={item.imdbID} {...item} />)
      ) : (
        <h3>Ничего не найдено</h3>
      )}
    </div>
  )
}

export default Movies
