import React from 'react';
import styled from 'styled-components';

const FeaturedImg = styled.img`
  position: absolute;
  height: 720px;
  object-fit: contain;
  transition: all ease 0.5s;
  visibility: ${props => props.visibility};
  opacity: ${props => props.opacity};
`;

const FeaturedStatic = props => (
  <FeaturedImg visibility={props.visibility} opacity={props.opacity} src={props.photo} onMouseEnter={props.hide} />
);

export default FeaturedStatic;
