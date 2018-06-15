import React from 'react';
import PropTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry.jsx';
import ReviewFilter from './ReviewFilter.jsx';

const ReviewList = props => (
  <div className="reviews">
    <ReviewFilter
      changeSortType={props.changeSortType}
      showFilterForm={props.showFilterForm}
      sizes={props.sizes}
      busts={props.busts}
      heights={props.heights}
      handleChange={props.handleChange}
      reviews={props.reviews}
    />
    {
      props.reviews.map(review => <ReviewListEntry review={review} />)
    }
  </div>
);

ReviewList.propTypes = {
  changeSortType: PropTypes.func.isRequired,
  showFilterForm: PropTypes.bool.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  busts: PropTypes.arrayOf(PropTypes.string).isRequired,
  heights: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleChange: PropTypes.func.isRequired,
  reviews: PropTypes.instanceOf(Object).isRequired,
};

export default ReviewList;
