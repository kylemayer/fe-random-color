import React, { Component } from 'react';
import Circle from '../components/display/CircleColor';

class ColorPicker extends Component {
    state = {
      color: '#FF0000',
    };

    randomColor = () => {
      const rainbow = [
        '##9400D3',
        '#4B0082',
        '#0000FF',
        '#00FF00',
        '#FFFF00',
        '#FF7F00',
        '#FF0000',
      ];

      return rainbow[Math.floor(Math.random() * rainbow.length)];
    };

    changeColor = () => setInterval(() => {
      this.setState({ color: this.randomColor() });
    }, 1000);

    componentDidMount = () => {
      this.changeColor();
    };


    render() {
      return (
        <Circle
          color={this.state.color} />
      );
    }
}

export default ColorPicker;
