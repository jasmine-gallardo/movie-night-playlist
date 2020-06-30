require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/users', (req, res, next) => {
  const sql = `
    select "userId",
      "name"
    from "users"
  `;
  db.query(sql)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.get('/api/users_playlists/:userId', (req, res, next) => {
  const userId = req.params.userId;
  const sql = `
    select "playlists"."playlistId",
      "playlists"."name",
      "users_playlists"."userId"
      from "playlists"
      join "users_playlists" using("playlistId")
    where "users_playlists"."userId" = $1
  `;
  const values = [userId];
  db.query(sql, values)
    .then(result => {
      if (result.rows.length === 0) {
        return (
          next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404))
        );
      }
      return res.status(200).json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/playlists_movies/:playlistId', (req, res, next) => {
  const playlistId = req.params.playlistId;
  const sql = `
    select "movies"."name",
      "movies"."movieId"
      from "movies"
      join "playlists_movies" using("movieId")
    where "playlists_movies"."playlistId" = $1
  `;
  const values = [playlistId];
  db.query(sql, values)
    .then(result => {
      if (result.rows.length === 0) {
        return (
          next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404))
        );
      }
      return res.status(200).json(result.rows);
    })
    .catch(err => next(err));
});

app.post('/api/movies/', (req, res, next) => {
  const movieName = req.body.movieName;
  const playlistId = req.body.playlistId;
  const sql = `
    insert into "movies" ("name")
    values ($1)
    returning "movieId"
  `;
  const values = [movieName];
  db.query(sql, values)
    .then(result => {
      const movieId = result.rows[0].movieId;
      return (movieId);
    })
    .catch(err => next(err));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
