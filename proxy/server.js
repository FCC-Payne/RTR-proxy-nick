const express = require('express');

const app = express();

app.get('/photo-viewer', (req, res) => {
  console.log('request received!')
  res.redirect('http://localhost:3001/photo-viewer');
});

app.use('/:id', express.static('public'));

app.listen(3000);
