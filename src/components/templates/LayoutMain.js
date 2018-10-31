import React from 'react';

import './LayoutMain.css';

const LayoutMain = (props) => (
	<div className="layout-main">
		<div className="layout-main__wrapper">
			<div className="layout-main__container">
				{props.children}
			</div>
		</div>
	</div>
);


export default LayoutMain;