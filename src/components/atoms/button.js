import React from 'react';
import PropTypes from 'prop-types';
import classHelper from 'classnames';

import './button.css';

const Button = ({ type, text }) => {
  const classNames = classHelper('button', {
    'button--primary': type === 'primary',
    'button--secondary': type === 'secondary'
  });

  return (
    <button className={classNames}>
			{text}
		</button>
  )
}

const propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

Button.propTypes = propTypes;

export default Button;