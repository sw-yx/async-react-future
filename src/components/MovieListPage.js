// credit: https://codesandbox.io/s/kk2v1op3m5

import React from 'react';
import { Spinner } from './Spinner';

export const MovieListPage = ({ loadingId, onMovieClick, moviesOverview }) => {
  return (
    <div>
      <h1>Top Box Office {'🍿'}</h1>
      <div>
        {moviesOverview.map(movie => (
          <div className="movie" key={movie.id} onClick={() => onMovieClick(movie.id)}>
            <div className="rating">{movie.rating > 70 ? '🍅' : '🤢'}</div>
            <div className="main">
              <div className="title">{movie.title}</div>
              <div className="info">
                {movie.rating}% · {movie.gross}
              </div>
            </div>
            {loadingId !== movie.id && <div className="hover">{'👉'}</div>}
            {loadingId === movie.id && (
              <div className="loading">
                <Spinner size="small" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};