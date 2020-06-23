import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

export default props => (
  <Collapsible popout>
    <CollapsibleItem
      expanded={false}
      header={
        <div className="col s12">
          <h3 className="col s9 push-s2 collapsible-header">Romantic Comedies
            <i className="col fas fa-chevron-down"></i>
          </h3>
        </div>
      }
      node="div"
    >
      <ul className="section">
        <li className="row">
          <h6 className="col s5 offset-s3">Sweet Home Alabama</h6>
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
        <li className="divider col s6 offset-s3" tabIndex="-1"></li>
        <li className="row">
          <h6 className="col s5 offset-s3">My Best Friend`&apos;`s Wedding</h6>
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
        <li className="divider col s6 offset-s3" tabIndex="-1"></li>
        <li className="row">
          <h6 className="col s5 offset-s3">The Family Stone</h6>
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
        <li className="divider col s6 offset-s3" tabIndex="-1"></li>
        <li className="row">
          <h6 className="col s5 offset-s3">The Holiday</h6>
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
        <li className="divider col s6 offset-s3" tabIndex="-1"></li>
      </ul>
    </CollapsibleItem>
  </Collapsible>
);
