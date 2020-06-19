import React from 'react';
import PlaylistCard from './playlist-card';

export default class UserPlaylists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [{ name: 'Romantic Comedies', playlistId: 1 }, { name: 'Sci-Fi', playlistId: 2 }, { name: 'Moms Playlist', playlistId: 3 }, { name: 'Halloween', playlistId: 4 }, { name: 'Kids', playlistId: 5 }, { name: 'Bruce Willis', playlistId: 6 }]
    };
  }

  // componentDidMount(){
  //   this.getUserPlaylists();
  // }

  getUserPlaylists() {
    fetch('/api/users_playlists')
      .then(res => res.json())
      .then(playlistsResult => this.setState({ playlists: playlistsResult }))
      .catch(console.error(err));
  }

  render() {
    return (
      <div className="container section">
        <div className="row section">
          <h4 className="col section">Your Playlists</h4>
          <a href="#modal1" className="btn-floating btn-small teal modal-trigger"><i className="fas fa-plus"></i></a>
          <div id="modal1" className="modal">
            <div className="modal-content">
              <h5>Create a movie playlist</h5>
              <div>
                <form>
                  <label htmlFor="playlistName"></label>
                  <input type="text" id="playlistName" name="playlistName" placeholder="New playlist"></input>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-close btn grey lighten-1">Cancel</a>
              <a href="#!" className="modal-close btn">Create</a>
            </div>
          </div>
        </div>
        <div className="row">
          {this.state.playlists.map(playlist => {
            return (
              <PlaylistCard
                key={playlist.playlistId}
                playlistName={playlist.name}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
