import React from 'react';

export default function PlaylistCard(props) {
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-content center">
          <h5 className="truncate">{props.playlistName}</h5>
        </div>
        <div className="card-action center">
          <a href="">Go to Playlist</a>
          <a href="#" className="dropdown-trigger" data-target="dropdown1">
            <i className="fas fa-ellipsis-h"></i>
          </a>
          <ul id="dropdown1" className="dropdown-content">
            <li>
              <a href="#!">Add a movie</a>
            </li>
            <li>
              <a href="#!">Delete playlist</a>
            </li>
            <li>
              <a href="#!">Rename</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
