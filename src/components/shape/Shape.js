import React from 'react';
import PropTypes from 'prop-types';

function Shape({
  text,
  color,
  backgroundColor
}){
  return(
    <p style={{ color, backgroundColor }}>
      {text}
    </p>
  );
}

Shape.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Shape;
