// This component will not change often so we separated it out from the other components
import React from 'react'
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom'

// Destructure the title will allow you to unpack values from arrays or objecys 
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<div className={`${size} menu-item`}
		onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
		<div className='content'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<span className='subtitle'> SHOP NOW</span>
		</div>
	</div>
);

export default withRouter(MenuItem)