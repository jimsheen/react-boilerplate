import React from 'react';

import LayoutMain from '../../templates/LayoutMain';

import Button from '../../atoms/button';

const HomePage = () => (
	<LayoutMain>
		<h1>Hello</h1>
		<Button type="primary" text="Primary Button" />
	</LayoutMain>
)

export default HomePage;