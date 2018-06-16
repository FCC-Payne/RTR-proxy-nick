import React from 'react';
import PropTypes from 'prop-types';

const ReviewListEntry = (props) => {
  const name = props.review.name || 'RTR Customer';
  const getDate = (date) => {
    const formattedDate = new Date(date);
    const day = formattedDate.getDate();
    let month = formattedDate.getMonth();
    const year = formattedDate.getFullYear();

    const months = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December',
    };

    month = months[month];

    return `${month} ${day}, ${year}`;
  };
  const date = getDate(props.review.date_posted);
  const getHeight = (heightNum) => {
    const heights = {
      54: '4\' 6"',
      55: '4\' 7"',
      56: '4\' 8"',
      57: '4\' 9"',
      58: '4\' 10"',
      59: '4\' 11"',
      60: '5\' 0"',
      61: '5\' 1"',
      62: '5\' 2"',
      63: '5\' 3"',
      64: '5\' 4"',
      65: '5\' 5"',
      66: '5\' 6"',
      67: '5\' 7"',
      68: '5\' 8"',
      69: '5\' 9"',
      70: '5\' 10"',
      71: '5\' 11"',
      72: '6\' 0"',
      73: '6\' 1"',
      74: '6\' 2"',
      75: '6\' 3"',
      76: '6\' 4"',
      77: '6\' 5"',
      78: '6\' 6"',
    };

    return heights[heightNum];
  };
  const height = getHeight(props.review.height);

  const url1 = `https://s3-us-west-1.amazonaws.com/rtr-review-user-pics/puppy${props.review.url1}.jpg`;
  const url2 = `https://s3-us-west-1.amazonaws.com/rtr-review-user-pics/puppy${props.review.url2}.jpg`;
  const url3 = `https://s3-us-west-1.amazonaws.com/rtr-review-user-pics/puppy${props.review.url3}.jpg`;

  return (
    <div className="indiv-review">
      <div className="reviewer-info label">
        <div className="reviewer-nickname header-font">
          <span>{name}</span>
          {
            (props.review.review_count >= 25) &&
            <div className="top-contributor label">top contributor</div>
          }
        </div>
        <div className="label">
          <span className="review-detail-label">size worn:</span><strong className="review-detail-value">{props.review.size_worn}</strong>
        </div>
        <div className="label">
          <span className="review-detail-label">rented for:</span><strong className="review-detail-value">{props.review.occasion}</strong>
        </div>
        <br />
        <div>
          <div className="label">
            <span className="review-detail-label">usually wears:</span><strong className="review-detail-value">{props.review.size}</strong>
          </div>
          <div className="label">
            <span className="review-detail-label">height:</span><strong className="review-detail-value">{height}</strong>
          </div>
          <div className="label">
            <span className="review-detail-label">age:</span><strong className="review-detail-value">{props.review.age}</strong>
          </div>
          <div className="label">
            <span className="review-detail-label">bust size:</span><strong className="review-detail-value">{props.review.bust}</strong>
          </div>
          <div className="label">
            <span className="review-detail-label">body type:</span><strong className="review-detail-value">{props.review.body_type}</strong>
          </div>
          <div className="label">
            <span className="review-detail-label">weight:</span><strong className="review-detail-value">{props.review.weight}</strong>
          </div>
        </div>
      </div>
      <div className="review-content">
        <div className={`review-rating rev-stars-${props.review.rating}`} />
        <div className="review-date label">{date}</div>
        <div className="review-title header-font">{props.review.review_title}</div>
        <p className="review-text proxima-body-font body-font">{props.review.review_body}</p>
      </div>
      <div className="review-photos">
        <div className="user-photo" >
          {
            props.review.url1 &&
            <img className="user-photo" src={url1} alt="user pic 1" />
          }
        </div>
        <div className="user-photo" >
          {
            props.review.url2 &&
            <img className="user-photo" src={url2} alt="user pic 2" />
          }
        </div>
        <div className="user-photo" >
          {
            props.review.url3 &&
            <img src={url3} alt="user pic 3" />
          }
        </div>
      </div>
    </div>
  );
};

ReviewListEntry.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
};

export default ReviewListEntry;
