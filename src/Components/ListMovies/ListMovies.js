import React from 'react'
import { useSelector } from 'react-redux'
import Movie from "../Movie/Movie"
import "./ListMovies.css"

const ListMovies = ({inputSearch}) => {

  const movies = useSelector (state => state.movieReducer.listMovies)
  
  return (
    <div className='movie-container' >
    {movies
      .filter(movie => movie.title.toUpperCase().includes(inputSearch.toUpperCase()))
       .map( movie =>
       <Movie movie={movie} key={movie.id}/>
     )}
    </div>
  )
}

export default ListMovies
