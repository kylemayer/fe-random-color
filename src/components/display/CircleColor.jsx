import React from 'react';
import PropTypes from 'prop-types';
import style from './circle.css';

const CircleColor = ({ color }) => {
  return <div className={style.circle} style={{ background: color }}></div>;
};

CircleColor.propTypes = { color: PropTypes.string.isRequired };

export default CircleColor;
