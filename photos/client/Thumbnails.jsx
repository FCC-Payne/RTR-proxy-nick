import React from 'react';
import Thumbnail from './Thumbnail.jsx';
import Arrow from './Arrow.jsx';

class Thumbnails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedIndices: [],
      nextActive: false,
      prevActive: false,
    };
    this.scroll = this.scroll.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.photos !== prevProps.photos) {
      this.setState({
        displayedIndices: [0, 2],
      }, this.activateArrows);
    }
  }

  activateArrows() {
    let next;
    let prev;
    this.state.displayedIndices[0] === 0 ? prev = false : prev = true;
    this.state.displayedIndices[1] === this.props.photos.length - 1 ? next = false : next = true;
    this.setState({
      nextActive: next,
      prevActive: prev,
    });
  }

  scroll(direction) {
    let indices = this.state.displayedIndices;
    if (direction === 'prev' && this.state.prevActive) {
      indices[0] -= 1;
      indices[1] -= 1;
    } else if (direction === 'next' && this.state.nextActive) {
      indices[0] += 1;
      indices[1] += 1;
    }
    this.setState({
      displayedIndices: indices,
    }, this.activateArrows);
  }

  render() {
    return(
      <div>
        <Arrow direction="prev" scroll={this.scroll} active={this.state.prevActive} />
        {this.props.photos.map((photo, index) => {
          let display;
          index >= this.state.displayedIndices[0] && index <= this.state.displayedIndices[1] ? display = 'block' : display = 'none';
          return <Thumbnail clickHandler={this.props.changePhoto} key={index} display={display} photo={photo} />;
        })}
        <Arrow direction="next" scroll={this.scroll} active={this.state.nextActive} />
      </div>
    );
  }
};

export default Thumbnails;
