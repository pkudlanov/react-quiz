import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({
  fontColor,
  backgroundColor,
  handleFontColorChange,
  handleBackgroundColorChange
}){
  return(
    <>
      <input name="fontColor" type="color" value={fontColor} onChange={handleFontColorChange}/>
      <input name="backgroundColor" type="color" value={backgroundColor} onChange={handleBackgroundColorChange}/>
    </>
  );
}

ColorSelector.propTypes = {
  fontColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  handleFontColorChange: PropTypes.func.isRequired,
  handleBackgroundColorChange: PropTypes.func.isRequired
};

export default ColorSelector;
