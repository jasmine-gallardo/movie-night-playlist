import React from 'react';
import { Dropdown } from 'react-materialize';

export default props => (
  < Dropdown
    id={`${props.dropdownId}`}
    options={{
      constrainWidth: false,
      coverTrigger: false
    }}

    trigger={
      <a node="a" className="dropdown-trigger">
        <i className="fas fa-ellipsis-h"></i>
      </a>
    }
  >
    <a href="#!">Remove from list</a>
    <a href="#!">Add to list</a>
    <a href="#!">Edit name</a>
  </Dropdown >
);
