import React, { Component } from 'react';
import ColorSelector from '../components/color-selector/ColorSelector';
import TextSelector from '../components/text-selector/TextSelector';
import Shape from '../components/shape/Shape';

export default class NameTag extends Component{
  state = {
    inputText: '',
    text: '',
    color: 'green',
    backgroundColor: 'orange'
  }

  handleTextChange = ({ target }) => {
    this.setState({ inputText: target.value });
  }

  handleColorChange = ({ target }) => {
    this.setState({ color: target.value });
  }

  handleBackgroundColorChange = ({ target }) => {
    this.setState({ backgroundColor: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ text: this.state.inputText });
  }

  render(){
    const { inputText, text, color, backgroundColor } = this.state;

    return(
      <>
        <ColorSelector
          color={color}
          backgroundColor={backgroundColor}
          handleColorChange={this.handleColorChange}
          handleBackgroundColorChange={this.handleBackgroundColorChange} />
        <TextSelector
          text={inputText}
          handleTextChange={this.handleTextChange}
          handleSubmit={this.handleSubmit} />
        <Shape
          text={text}
          backgroundColor={backgroundColor}
          color={color} />
      </>
    );
  }
}
