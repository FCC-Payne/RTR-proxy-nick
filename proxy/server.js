const express = require('express');

const app = express();

app.get('/:id/photo-viewer/bundle', (req, res) => {
  res.redirect(`http://localhost:3001/${req.params.id}/photo-viewer/bundle.js`);
});

app.get('/:id/photo-viewer/styles', (req, res) => {
  res.redirect(`http://localhost:3001/${req.params.id}/photo-viewer/styles.css`);
});

app.get('/:id/forms', (req, res) => {
  res.redirect(`http://localhost:3003/${req.params.id}/bundle.js`);
});

app.get('/:id/carousel/bundle', (req, res) => {
  res.redirect(`http://localhost:3004/${req.params.id}/bundle.js`);
});

app.get('/:id/carousel/styles', (req, res) => {
  res.redirect(`http://localhost:3004/${req.params.id}/styles.css`);
});

app.get('/reviews', (req, res) => {
  res.sendStatus(200);
});

app.use('/:id', express.static('public'));
app.use('/:id', express.static('screenshots'));

app.listen(3000);
