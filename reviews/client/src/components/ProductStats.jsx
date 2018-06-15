import React from 'react';
import PropTypes from 'prop-types';

const ProductStats = props => (
  <div className="reviews-header">
    <div className="reviews-summary-content">
      <div>
        <h2 className="review-count">{props.count} reviews</h2>
        <div className={`rev-stars-${props.avg}`} />
      </div>
      <div className="reviews-header_fit-photo">
        <div className="reviews-header_fit-summary">
          <div className="header-font">Fit</div>
          <div>
            <table className="fit-summary">
              <tbody>
                {
                  props.fitKeys.map(fitKey => (
                    <tr className="fit-summary_row">
                      <td className="fit-summary_label label">{fitKey}</td>
                      <td className="fit-summary_bar">
                        <div className="fit-summary_bar-background">
                          <div className="fit-summary_bar-highlight" style={{ width: `${props.getPercentage(fitKey)}px` }} />
                        </div>
                      </td>
                      <td className="fit-summary_count label">({props.getPercentage(fitKey)}%)</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ProductStats.propTypes = {
  fitKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  count: PropTypes.number.isRequired,
  avg: PropTypes.number.isRequired,
  getPercentage: PropTypes.func.isRequired,
};

export default ProductStats;
