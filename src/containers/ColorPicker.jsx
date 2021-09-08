import React, { Component } from 'react';
import Controls from '../components/colors/Controls';
import Display from '../components/colors/Display';

class ColorPicker extends Component {
    state = {
      color: '#000000',
    };

    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };

    render() {
      return (
        <>
          <Controls
            color={this.state.color}
            onChange={this.handleChange}
          />
          <Display
            color={this.state.color}
          />
        </>
      );
    }
}

export default ColorPicker;
