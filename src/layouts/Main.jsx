import React from 'react'
import Movies from '../components/Movies'
import Preloader from '../components/Preloader'
import Search from '../components/Search'

// const API_KEY = process.env.REACT_APP_API_KEY
const API_KEY = '92b3af90'
class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      loading: true,
    }
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        return data.Search
      })
      .then((list) => {
        console.log(list)
        this.setState({ movies: list, loading: false })
      })
      .catch((error) => console.error(error))
  }

  searchMovies = (str, type = 'all') => {
    this.setState({ loading: true })
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        return data.Search
      })
      .then((list) => {
        console.log(list)
        this.setState({ movies: list, loading: false })
      })
      .catch((error) => console.error(error))
  }

  render() {
    const { movies, loading } = this.state

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    )
  }
}

export default Main
