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

app.get('/:id/reviews/bundle', (req, res) => {
  res.redirect(`http://localhost:3002/${req.params.id}/bundle.js`);
});

app.get('/:id/reviews/styles', (req,res) => {
  res.redirect(`http://localhost:3002/${req.params.id}/stylesheet.css`);
});

app.use('/:id', express.static('public'));
app.use('/:id', express.static('screenshots'));

app.listen(3000);
