import React from 'react';
import classHelper from 'classnames';

import './button.css';

const Button = ({ type, text }) => {
 const classNames = classHelper('button', {
    'button--primary': type === 'primary',
    'button-secondary': type === 'secondary'
  });

	return (
		<button className={classNames}>
			{text}
		</button>
	)
}


export default Button;