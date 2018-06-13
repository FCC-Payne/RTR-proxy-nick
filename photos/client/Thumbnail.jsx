import React from 'react';
import styled from 'styled-components';

const ProductThumbnailImg = styled.img`
  vertical-align: middle;
  padding-bottom: 10px;
  padding-top: 10px;
  display: ${props => props.display};
`;

const Thumbnail = props => (
  <ProductThumbnailImg display={props.display} onClick={() => props.clickHandler(props.photo)} width="85" src={props.photo} />
);

export default Thumbnail;
