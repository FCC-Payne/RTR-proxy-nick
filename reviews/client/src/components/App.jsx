import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ProductStats from './ProductStats.jsx';

class App extends React.Component {
  static sortByDate(data) {
    return data.sort((a, b) => {
      const aa = a.date_posted.slice(0, 10).split('-');
      const bb = b.date_posted.slice(0, 10).split('-');
      return bb[0] - aa[0] || bb[1] - aa[1] || bb[2] - aa[2];
    });
  }

  static sortByRating(data) {
    return data.sort((a, b) => {
      const aa = a.date_posted.split('-');
      const bb = b.date_posted.split('-');
      const cc = a.rating;
      const dd = b.rating;
      return dd - cc || bb[0] - aa[0] || bb[1] - aa[1] || bb[2] - aa[2];
    });
  }

  static sortByFeatured(data) {
    return data.sort((a, b) => {
      const aa = a.date_posted.split('-');
      const bb = b.date_posted.split('-');
      const cc = a.rating;
      const dd = b.rating;
      const ePhotos = [a.url1, a.url2, a.url3];
      const fPhotos = [b.url1, b.url2, b.url3];
      const ee = [];
      const ff = [];
      for (let i = 0; i < ePhotos.length; i += 1) {
        if (ePhotos[i]) {
          ee.push(ePhotos[i]);
        }
      }
      for (let j = 0; j < fPhotos.length; j += 1) {
        if (fPhotos[j]) {
          ff.push(fPhotos[j]);
        }
      }
      return ff.length - ee.length || dd - cc || bb[0] - aa[0] || bb[1] - aa[1] || bb[2] - aa[2];
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fitKeys: ['large', 'true to size', 'small'],
      counter: 0,
      showFilterForm: true,
      sizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
      busts: ['32AA', '32A', '32B', '32C', '32D', '34AA', '34A', '34B', '34C', '34D', '36AA', '36A', '36B', '36C', '36D', '38AA', '38A', '38B', '38C', '38D'],
      heights: [],
      avgRating: 0,
    };
    this.getUserData = this.getUserData.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeSortType = this.changeSortType.bind(this);
    this.constructor.sortByDate = this.constructor.sortByDate.bind(this);
    this.constructor.sortByRating = this.constructor.sortByRating.bind(this);
    this.constructor.sortByFeatured = this.constructor.sortByFeatured.bind(this);
    this.sortByMeasurements = this.sortByMeasurements.bind(this);
    this.constructor.getAverageRating = this.constructor.getAverageRating.bind(this);
    this.getPercentage = this.getPercentage.bind(this);
    this.setHeights = this.setHeights.bind(this);
    // this.getFormattedDate = this.getFormattedDate.bind(this);
    // this.getFormattedHeight = this.getFormattedHeight.bind(this);
  }

  componentDidMount() {
    const path = document.location.pathname.split('/')[1];
    this.getUserData(path);
    this.setHeights();
  }

  getUserData(productId) {
    axios.get(`http://localhost:3002/${productId}/reviews`)
      .then((res) => {
        this.setState({
          data: this.constructor.sortByDate(res.data),
          avgRating: this.constructor.getAverageRating(res.data),
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  static getFormattedHeight(heightNum) {
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
  }

  setHeights() {
    const heights = [];
    for (let i = 54; i <= 78; i += 1) {
      heights.push(i);
    }
    this.setState({ heights });
  }

  static getAverageRating(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i += 1) {
      sum += data[i].rating;
    }
    const avg = Math.round((sum / data.length));
    return avg;
  }
  getPercentage(keyword) {
    const data = [].concat(this.state.data);
    let count = 0;
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].fit === keyword) {
        count += 1;
      }
    }
    const percentage = count > 0 ? Math.round((count / data.length) * 100) : 0;
    return percentage;
  }

  handleChange(event, inputType) {
    this.sortByMeasurements(event.target.value, inputType);
  }

  sortByMeasurements(userInput, inputType) {
    const data = [].concat(this.state.data);
    const busts = {
      '32AA': 32.1,
      '32A': 32.2,
      '32B': 32.3,
      '32C': 32.4,
      '32D': 32.5,
      '34AA': 34.1,
      '34A': 34.2,
      '34B': 34.3,
      '34C': 34.4,
      '34D': 34.5,
      '36AA': 36.1,
      '36A': 36.2,
      '36B': 36.3,
      '36C': 36.4,
      '36D': 36.5,
      '38AA': 38.1,
      '38A': 38.2,
      '38B': 38.3,
      '38C': 38.4,
      '38D': 38.5,
      null: 0,
    };

    const sorted = data.sort((a, b) => {
      let aa;
      let bb;

      if (inputType === 'bust') {
        aa = busts[a[inputType]];
        bb = busts[b[inputType]];
        return Math.abs(aa - busts[userInput]) - Math.abs(bb - busts[userInput]);
      }
      aa = a[inputType];
      bb = b[inputType];
      return Math.abs(aa - userInput) - Math.abs(bb - userInput);
    });

    this.setState({ data: sorted });
  }

  changeSortType(event) {
    const options = {
      wlm: 1,
      featured: 2,
      newest: 3,
      rating: 4,
    };
    this.setState({ counter: options[event.target.value] }, () => {
      this.renderReviews();
      this.setHeights();
    });
  }
  renderReviews() {
    const data = [].concat(this.state.data);
    let sorted;

    if (this.state.counter === 0 || this.state.counter === 1 || this.state.counter === 3) {
      sorted = this.constructor.sortByDate(data);
    } else if (this.state.counter === 2) {
      sorted = this.constructor.sortByFeatured(data);
    } else if (this.state.counter === 4) {
      sorted = this.constructor.sortByRating(data);
    }
    if (this.state.counter === 0 || this.state.counter === 1) {
      this.setState({
        showFilterForm: true,
        data: sorted,
      });
    } else {
      this.setState({
        showFilterForm: false,
        data: sorted,
      });
    }
  }
  render() {
    return (
      <div className="reviews-partial">
        <ProductStats
          fitKeys={this.state.fitKeys}
          count={this.state.data.length}
          avg={this.state.avgRating}
          getPercentage={this.getPercentage}
        />
        <ReviewList
          reviews={this.state.data}
          changeSortType={this.changeSortType}
          getHeight={this.getFormattedHeight}
          showFilterForm={this.state.showFilterForm}
          sizes={this.state.sizes}
          heights={this.state.heights}
          busts={this.state.busts}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
