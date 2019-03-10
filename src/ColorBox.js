import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newValue = this.props.opacity - 0.1;

    if (this.props.opacity >= 0.2) {
      console.log(newValue)
      return (
        <div className="color-box" style={{ opacity: this.props.opacity }}>
          <ColorBox opacity={newValue} />
        </div>
      );
    } else {
      return null;
    }
  }
}
