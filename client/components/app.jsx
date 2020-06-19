import React from 'react';
import UserPlaylists from './user-playlists';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'playlists',
      user: 3
    };
  }

  // componentDidMount() {
  //   this.getUser();
  // }

  // getUser() {
  //   fetch('/api/users')
  //     .then(res => res.json())
  //     .then(userResult => this.setState({ user: userResult }))
  //     .catch(err => console.error(err));
  // }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper row">
            <div className="col s11 offset-s1 valign-wrapper">
              <i className="fas fa-film"></i>
              <a href="wireframe.html" className="col s6 m6 l8">
                Movie Night
              </a>
              <ul id="nav-mobile" className="right col s5 offset-s1 m4 offset-m2 l3 offset-l1">
                <li><a href="wireframe.html">Playlists</a></li>
                <li><a href="user.html"><i className="fas fa-user"></i></a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <UserPlaylists />
        </div>
      </div>
    );
  }
}
