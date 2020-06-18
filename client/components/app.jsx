import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'playlists'
    };
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return (
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
    );
  }
}
