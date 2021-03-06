const express = require('express');
const Artist = require('./models/Artist');
const Album = require('./models/Album');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/api/v1/artists', (req, res, next) => {
  Artist
    .find()
    .then(artists => res.send(artists))
    .catch(next);
});

app.get('/api/v1/albums', (req, res, next) => {
  Album
    .find()
    .then(albums => res.send(albums))
    .catch(next);
});

app.post('/api/v1/artists', (req, res, next) => {
  Artist
    .insert(req.body)
    .then(artist => res.send(artist))
    .catch(next);
});

app.post('/api/v1/albums', (req, res, next) => {
  Album
    .insert(req.body)
    .then(album => res.send(album))
    .catch(next);
});

app.get('/api/v1/artists/:id', (req, res, next) => {
  Artist
    .findById(req.params.id)
    .then(artist => res.send(artist))
    .catch(next);
});

app.get('/api/v1/albums/:id', (req, res, next) => {
  Album
    .findById(req.params.id)
    .then(album => res.send(album))
    .catch(next);
});

app.put('/api/v1/artists/:id', (req, res, next) => {
  Artist
    .update(req.params.id, req.body)
    .then(artist => res.send(artist))
    .catch(next);
});

app.put('/api/v1/albums/:id', (req, res, next) => {
  Album
    .update(req.params.id, req.body)
    .then(album => res.send(album))
    .catch(next);
});

app.delete('/api/v1/artists/:id', (req, res, next) => {
  Artist
    .delete(req.params.id)
    .then(artist => res.send(artist))
    .catch(next);
});

app.delete('/api/v1/albums/:id', (req, res, next) => {
  Album
    .delete(req.params.id)
    .then(album => res.send(album))
    .catch(next);
});

module.exports = app;
