import React from 'react';
import Collapsible from './collapsible';

export default class SinglePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      randomizedMovies: [],
      moviesArray: []
    };
    this.getMovies = this.getMovies.bind(this);
    this.shuffleMovies = this.shuffleMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    const playlistId = this.props.playlistId;
    fetch(`/api/playlists_movies/${playlistId}`)
      .then(res => res.json())
      .then(moviesArray => {
        const movieNames = moviesArray.map(movie => movie.name);
        this.setState({
          movies: movieNames,
          randomizedMovies: movieNames,
          moviesArray
        });
      })
      .catch(err => console.error(err));
  }

  shuffleMovies() {
    const moviesArray = this.state.randomizedMovies;
    const moviesToShuffle = Array.from(moviesArray);
    for (let i = 0; i < moviesToShuffle.length; i++) {
      const randomNumber = Math.floor(Math.random() * moviesToShuffle.length);
      const placeHolder = moviesToShuffle[i];
      moviesToShuffle[i] = moviesToShuffle[randomNumber];
      moviesToShuffle[randomNumber] = placeHolder;
    }
    this.setState({ randomizedMovies: moviesToShuffle });
  }

  render() {
    return (
      <div className="container">
        <div className="row section">
          <div className="col s12 row">
            <Collapsible playlistName={this.props.playlistName} moviesArray={this.state.moviesArray}/>
          </div>
        </div>
        <div className="row col s12">
          <div className="center col s12 row">
            <p className="col s12">You&apos;re watching:</p>
            <h4 className="col s12">{this.state.randomizedMovies[0]}</h4>
          </div>
          <div className="center section col s12">
            <button onClick={() => this.shuffleMovies()} className="btn waves-effect">Shuffle Movies</button>
          </div>
        </div>
      </div>
    );
  }
}
