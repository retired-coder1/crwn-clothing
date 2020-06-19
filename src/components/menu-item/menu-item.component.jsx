// This component will not change often so we separated it out from the other components
import React from 'react'
import './menu-item.styles.scss'


// Destructure the title will allow you to unpack values from arrays or objecys 
const MenuItem = ({ title, imageUrl, size }) => (
	<div className={`${size} menu-item`}>
		<div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
		<div className='content'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<span className='subtitle'> SHOP NOW</span>
		</div>
	</div>
);

export default MenuItem