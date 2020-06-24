import React from 'react';
import Collapsible from './collapsible';

export default class SinglePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row section">
          <div className="col s12 row">
            <Collapsible playlistName={this.props.playlistName}/>
          </div>
        </div>
        <div className="row col s12">
          <div className="center col s12 row">
            <p className="col s12">You&apos;re watching:</p>
            <h4 className="col s12">Sweet Home Alabama</h4>
          </div>
          <div className="center section col s12">
            <button className="btn waves-effect">Shuffle Movies</button>
          </div>
        </div>
      </div>
    );
  }
}
