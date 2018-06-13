import React from 'react';
import styled from 'styled-components';

const FeaturedImgZoom = styled.img`
  height: 720px;
  position: relative;
  overflow: hidden;
  object-fit: none;
  transition-property: visibility, opacity, object-position; 
  transition-timing-function: ease-out;
  transition-duration: 0.5s, 0.5s, 0.3s;
  object-position: ${props => props.objectPosition};
  visibility: ${props => props.visibility};
  opacity: ${props => props.opacity};
`;

class FeaturedZoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objectPosition: '0% 0%',
      imgX: 0,
      imgY: 0,
      width: 1080,
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.wheel = this.wheel.bind(this);
  }

  mouseEnter(event) {
    const rect = event.target.getClientRects();
    this.setState({
      imgX: rect[0].x,
      imgY: rect[0].y,
      width: 1080,
    });
  }

  mouseMove(event) {
    this.setState({
      objectPosition: `${(event.clientX - this.state.imgX) * 100 / 480}% ${(event.clientY - this.state.imgY) * 100 / 720}%`,
    });
  }

  mouseLeave() {
    this.props.hide();
  }

  wheel(event) {
    event.preventDefault();
    if (event.deltaY > 0 && this.state.width > 480) {
      const newWidth = this.state.width - 20;
      this.setState({
        width: newWidth,
      });
    }
    if (event.deltaY < 0 && this.state.width < 1080) {
      const newWidth = this.state.width + 20;
      this.setState({
        width: newWidth,
      });
    }
  }

  render() {
    const imgStyle = {
      objectPosition: this.state.objectPosition,
      opacity: this.props.opacity,
      visibility: this.props.visibility,
    };
    return(
      <FeaturedImgZoom 
        className="featured-image-zoom"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.props.hide}
        onMouseMove={this.mouseMove}
        onWheel={this.wheel}
        objectPosition={this.state.objectPosition}
        opacity={this.props.opacity}
        visibility={this.props.visibility}
        srcSet={`${this.props.photo} 1080w`}
        sizes={`${this.state.width}px`}
      />
    );
  }
}

export default FeaturedZoom;
