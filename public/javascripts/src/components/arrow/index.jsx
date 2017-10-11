import React from 'react';
import ReactDOM from 'react-dom';
import omit from 'lodash/omit';

const Arrow = ({ direction, height, width, stroke, ...props }) => {
  const points = (direction === "left")
  ? "45.63,75.8 0.375,38.087 45.63,0.375 "
  : "0.375,0.375 45.63,38.087 0.375,75.8 "
  const properties = omit(props, ['currentSlide', 'slideCount'])
  return (<button {...properties} className={`arrow ${direction}`}>
    <svg width="60px" height="80px" viewBox="0 0 50 80" >
      <polyline
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={ points }
      />
    </svg>
  </button>)
}
export default Arrow
