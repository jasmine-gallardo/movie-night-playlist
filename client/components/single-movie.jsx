import React from 'react';

export default function SingleMovie(props) {
  return (
    <li className="row">
      <h6 className="col s5 offset-s3">{props.movieName}</h6>
      <a className="dropdown-trigger" href="#" data-target="dropdown">
        <i className="col fas fa-ellipsis-h"></i>
      </a>
      <ul id="dropdown" className="dropdown-content">
        <li>
          <a href="#!">Remove from list</a>
        </li>
        <li>
          <a href="#!">Add to list</a>
        </li>
        <li>
          <a href="#!">Edit name</a>
        </li>
      </ul>
    </li>
  );
}
