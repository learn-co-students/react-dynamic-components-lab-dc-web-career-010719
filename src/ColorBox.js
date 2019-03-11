import React, { Component } from 'react';

export default class ColorBox extends Component {
  render() {
    const opacity = this.props.opacity - 0.1
    
    if (this.props.opacity >= 0.2) {
      console.log(opacity)
      return (
        <div className="color-box" style={{opacity: opacity + 0.1}}>
          <ColorBox opacity={opacity} />
        </div>
      )
    } else {
      return null
    }
  }
}
