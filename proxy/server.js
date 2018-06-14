const express = require('express');

const app = express();

app.get('/photo-viewer', (req, res) => {
  res.redirect('http://localhost:3001/photo-viewer');
});

app.get('/forms', (req, res) => {
  res.sendStatus(200);
});

app.get('/carousel', (req, res) => {
  res.sendStatus(200);
});

app.get('/reviews', (req, res) => {
  res.sendStatus(200);
});

app.use('/:id', express.static('public'));
app.use('/:id', express.static('screenshots'));

app.listen(3000);
