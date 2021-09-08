import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ color, onChange }) => {
  return (
    <>
      <input type="color" name="color" value={color} onChange={onChange} />
    </>
  );
};

Controls.propTypes = {
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Controls;
