import React from 'react';
import Dropdown from './dropdown';

export default function PlaylistCard(props) {
  const playlistName = props.playlistName;
  const playlistId = props.playlistId;
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-content center">
          <h5 className="truncate">{playlistName}</h5>
        </div>
        <div className="card-action center">
          <button className="btn-flat" onClick={() => props.setView('single-playlist', playlistId, playlistName)}>Go to Playlist</button>
          <Dropdown dropdownId={props.playlistId}/>
        </div>
      </div>
    </div>
  );
}
