import React from 'react';
import Dropdown from './dropdown';

export default function PlaylistCard(props) {
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-content center">
          <h5 className="truncate">{props.playlistName}</h5>
        </div>
        <div className="card-action center">
          <a href="">Go to Playlist</a>
          <Dropdown dropdownId={props.dropdownId}/>
        </div>
      </div>
    </div>
  );
}
