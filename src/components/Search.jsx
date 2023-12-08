import React from 'react'

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      search: '',
      type: 'all',
    }
  }

  handleKey = (evt) => {
    if (evt.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type)
    }
  }

  handleFilter = (evt) => {
    this.setState(
      () => ({ type: evt.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type)
      }
    )
    // this.props.searchMovies(this.state.search)
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              id="email_inline"
              placeholder="search..."
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(evt) => {
                return this.setState({ search: evt.target.value })
              }}
              onKeyDown={this.handleKey}
            />
            <button
              className="btn search-btn"
              onClick={() =>
                this.props.searchMovies(
                  this.state.search,
                  this.state.type
                )
              }
            >
              Search
            </button>
          </div>
        </div>
        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Series</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="episode"
              onChange={this.handleFilter}
              checked={this.state.type === 'episode'}
            />
            <span>Episode</span>
          </label>
        </div>
      </div>
    )
  }
}

export default Search
