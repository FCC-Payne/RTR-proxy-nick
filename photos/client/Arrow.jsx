import React from 'react';
import styled, { keyframes } from 'styled-components';

const ThumbControls = styled.div`
  padding: 20px;
  height: 13px;
  width: 45px;
`;

const bouncePrev = keyframes`
  0% {top: 0;}
  20% {top: 5px;}
  32% {top: 0;}
  42% {top: 2px;}
  50% {top: 0;}
`;

const bounceNext = keyframes`
  0% {top: 0;}
  20% {top: -5px;}
  32% {top: 0;}
  42% {top: -2px;}
  50% {top: 0;}
`;

const ArrowSpan = styled.span`
  display: inline-block;
  position: relative;
  height: 12px;
  width: 12px;
  margin-left: 16px;
  margin-right: 16px;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-color: ${props => props.active ? 'black' : 'lightgray'};
  transform: rotate(${props => props.direction === 'prev' ? 135 : -45}deg);
  ${props => props.active ? '&:hover { border-color: gray; }' : ''}

  ${ThumbControls}:hover & {
    ${props => {
      if (props.active && props.direction === 'prev') {
        return `animation: 2s ease infinite ${bouncePrev};`;
      } else if (props.active && props.direction === 'next') {
        return `animation: 2s ease infinite ${bounceNext};`;
      }
    }}
  }
`;

const Arrow = props => {
  return(
    <ThumbControls active={props.active} onClick={() => props.scroll(props.direction)}>
      <ArrowSpan direction={props.direction} active={props.active}></ArrowSpan>
    </ThumbControls>
  );
};

export default Arrow;
