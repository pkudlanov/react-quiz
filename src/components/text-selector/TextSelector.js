import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({
  text,
  handleTextChange
}){
  return(
    <>
      <input name="fontColor" type="text" value={text} onChange={handleTextChange}/>
    </>
  );
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired
};

export default TextSelector;
