import React from 'react';
import UserPlaylists from './user-playlists';
import M from 'materialize-css';
import SinglePlaylist from './single-playlist';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'playlists', params: null, playlistName: '' },
      user: 3
    };
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems);
    });
    // this.getUser();
  }

  setView(name, params, playlistName) {
    this.setState({ view: { name, params, playlistName } });
  }

  // getUser() {
  //   fetch('/api/users')
  //     .then(res => res.json())
  //     .then(userResult => this.setState({ user: userResult }))
  //     .catch(err => console.error(err));
  // }

  render() {
    let view;
    switch (this.state.view.name) {
      case 'playlists': view =
        <UserPlaylists userId={this.state.user} setView={this.setView} />;
        break;
      case 'single-playlist': view =
        <SinglePlaylist playlistId={this.state.view.params} playlistName={this.state.view.playlistName}/>;
    }

    return (
      <div>
        <nav>
          <div className="nav-wrapper row">
            <div className="col s11 offset-s1 valign-wrapper">
              <i className="fas fa-film"></i>
              <a href="" className="col s6 m6 l8">
                Movie Night
              </a>
              <ul id="nav-mobile" className="right col s5 offset-s1 m4 offset-m2 l3 offset-l1">
                <li><a href="">Playlists</a></li>
                <li><a href=""><i className="fas fa-user"></i></a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          {view}
        </div>
      </div>
    );
  }
}
