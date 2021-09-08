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

      const newColor = rainbow[Math.floor(Math.random() * rainbow.length)];

      if(newColor !== this.state.color) return newColor;
      else return 'url("https://pbs.twimg.com/profile_images/1403453134668767236/poMoHcUx_200x200.jpg")'
    };

    changeColor = () => setInterval(() => {
      this.setState({ color: this.randomColor() });
    }, 777);

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
