const express = require('express');

const app = express();

app.get('/:id/photo-viewer/bundle', (req, res) => {
  res.redirect(`http://rtr-photoviewer.us-west-1.elasticbeanstalk.com/${req.params.id}/photo-viewer/bundle.js`);
});

app.get('/:id/photo-viewer/styles', (req, res) => {
  res.redirect(`http://rtr-photoviewer.us-west-1.elasticbeanstalk.com/${req.params.id}/photo-viewer/styles.css`);
});

app.get('/:id/photos/photo-viewer', (req, res) => {
  res.redirect(`http://rtr-photoviewer.us-west-1.elasticbeanstalk.com/${req.params.id}/photos/photo-viewer`);
});

app.get('/:id/forms', (req, res) => {
  res.redirect(`http://form-input-fec.us-west-1.elasticbeanstalk.com/${req.params.id}/bundle.js`);
});

app.get('/forms/:id', (req, res) => {
	res.redirect(`http://form-input-fec.us-west-1.elasticbeanstalk.com/forms/${req.params.id}`);
});

app.get('/:id/carousel/bundle', (req, res) => {
  res.redirect(`http://rtr-carousel.us-west-1.elasticbeanstalk.com/${req.params.id}/bundle.js`);
});

app.get('/:id/carousel/styles', (req, res) => {
  res.redirect(`http://rtr-carousel.us-west-1.elasticbeanstalk.com/${req.params.id}/styles.css`);
});

app.get('/:currentProduct/product/id', (req, res) => {
  res.redirect(`http://rtr-carousel.us-west-1.elasticbeanstalk.com/${req.params.currentProduct}/product/id`)
});
app.get('/:image/image/product_id', (req, res) => {
  res.redirect(`http://rtr-carousel.us-west-1.elasticbeanstalk.com/${req.params.image}/image/product_id`)
});
app.get('/:id/heart', (req, res) => {
  res.redirect(`http://rtr-carousel.us-west-1.elasticbeanstalk.com/${req.params.id}/heart`)
});
   
app.get('/recommendation', (req, res) => {
  res.redirect(`http://rtr-carousel.us-west-1.elasticbeanstalk.com/${req.params.id}/recommendation`)
});

app.get('/:id/sprites/001-heart.svg', (req, res) => {
  res.redirect(`http://rtr-carousel.us-west-1.elasticbeanstalk.com/${req.params.id}/sprites/001-heart.svg`)
});

app.get('/:id/sprites/002-unheart.svg', (req, res) => {
  res.redirect(`http://rtr-carousel.us-west-1.elasticbeanstalk.com/${req.params.id}/sprites/002-unheart.svg`)
});

app.get('/:id/sprites/001-next.svg', (req, res) => {
  res.redirect(`http://rtr-carousel.us-west-1.elasticbeanstalk.com/${req.params.id}/sprites/001-next.svg`)
});

app.get('/:id/sprites/002-back.svg', (req, res) => {
  res.redirect(`http://rtr-carousel.us-west-1.elasticbeanstalk.com/${req.params.id}/sprites/002-back.svg`)
});

app.post('/add_heart/:productToAdd', (req, res) => {
  res.redirect(`http://rtr-carousel.us-west-1.elasticbeanstalk.com/remove_heart/${req.params.productToAdd}`)
});

app.post('/remove_heart/:productToRemove', (req, res) => {
  res.redirect(`http://rtr-carousel.us-west-1.elasticbeanstalk.com/remove_heart/${req.params.productToRemove}`)
});

app.get('/:id/reviews/bundle', (req, res) => {
  res.redirect(`http://rtrreviews-env.5i33pp4m8w.us-west-1.elasticbeanstalk.com/${req.params.id}/bundle.js`);
});

app.get('/:id/reviews/styles', (req,res) => {
  res.redirect(`http://rtrreviews-env.5i33pp4m8w.us-west-1.elasticbeanstalk.com/${req.params.id}/stylesheet.css`);
});

app.get('/:id/reviews', (req,res) => {
  res.redirect(`http://rtrreviews-env.5i33pp4m8w.us-west-1.elasticbeanstalk.com/${req.params.id}/reviews`);
});

app.use('/:id', express.static('public'));

app.listen(process.env.PORT);
