import React from 'react';
import PlaylistCard from './playlist-card';

export default class UserPlaylists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: []
    };
    this.getUserPlaylists = this.getUserPlaylists.bind(this);
  }

  componentDidMount() {
    this.getUserPlaylists();
  }

  getUserPlaylists() {
    const userId = this.props.userId;
    fetch(`/api/users_playlists/${userId}`)
      .then(res => res.json())
      .then(playlistsResult => this.setState({ playlists: playlistsResult }))
      .catch(err => console.error(err));
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
          {
            this.state.playlists.map(playlist => {
              return (
                <PlaylistCard
                  key={playlist.playlistId}
                  playlistName={playlist.name}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}
