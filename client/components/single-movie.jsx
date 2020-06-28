import React from 'react';
import Dropdown from './movie-dropdown';

export default function SingleMovie(props) {
  return (
    <li className="row">
      <h6 className="col s5 offset-s3">{props.movieName}</h6>
      <Dropdown dropdownId={props.dropdownId}/>
    </li>
  );
}
