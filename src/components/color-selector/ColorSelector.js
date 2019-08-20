import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({
  color,
  backgroundColor,
  handleColorChange,
  handleBackgroundColorChange
}){
  return(
    <>
      <input name="color" type="color" value={color} onChange={handleColorChange}/>
      <input name="backgroundColor" type="color" value={backgroundColor} onChange={handleBackgroundColorChange}/>
    </>
  );
}

ColorSelector.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  handleColorChange: PropTypes.func.isRequired,
  handleBackgroundColorChange: PropTypes.func.isRequired
};

export default ColorSelector;
