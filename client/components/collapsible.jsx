import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import SingleMovie from './single-movie';

export default props => (
  <Collapsible popout>
    <CollapsibleItem
      expanded={false}
      header={
        <div className="col s12">
          <h3 className="col s9 push-s2 collapsible-header">{props.playlistName}
            <i className="col fas fa-chevron-down"></i>
          </h3>
        </div>
      }
      node="div"
    >
      <ul className="section">
        {props.moviesArray.map(movie => {
          return (
            <SingleMovie key={movie.movieId} dropdownId={movie.movieId} movieName={movie.name}/>
          );
        })}
      </ul>
    </CollapsibleItem>
  </Collapsible>
);
