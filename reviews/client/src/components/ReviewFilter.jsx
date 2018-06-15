import React from 'react';
import PropTypes from 'prop-types';

const ReviewFilter = (props) => {
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

  return (
    <div className="review-filters-wrapper">
      <div className="review-filters">
        <div className="label">sort</div>
        <form>
          <select onChange={props.changeSortType}>
            <option value="wlm">Women Like Me</option>
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="rating">Rating</option>
          </select>
        </form>
      </div>
      <div>
        {
        props.showFilterForm &&
          <form>
            <div className="label">Match My Size</div>
            <select onChange={e => props.handleChange(e, 'size')}>
              <option value selected>Size</option>
              {
                props.sizes.map(size => <option value={size}>{size}</option>)
              }
            </select>
            <select onChange={e => props.handleChange(e, 'height')}>
              <option value selected>Height</option>
              {
                props.heights.map(height => <option value={height}>{getHeight(height)}</option>)
              }
            </select>
            <select onChange={e => props.handleChange(e, 'bust')}>
              <option value selected>Bust Size</option>
              {
                props.busts.map(bust => <option value={bust}>{bust}</option>)
              }
            </select>
            <input type="text" placeholder="Age" onChange={e => props.handleChange(e, 'age')} />
          </form>
        }
      </div>
    </div>
  );
};

ReviewFilter.propTypes = {
  busts: PropTypes.arrayOf(PropTypes.string).isRequired,
  heights: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleChange: PropTypes.func.isRequired,
  changeSortType: PropTypes.func.isRequired,
  showFilterForm: PropTypes.bool.isRequired,
};

export default ReviewFilter;
