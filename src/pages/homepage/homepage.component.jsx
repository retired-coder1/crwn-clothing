import React, { Fragment } from 'react'
// import Directory from '../../components/directory/directory.component'
import './homepage.styles.scss'
import { Route } from 'react-router-dom'


const HatsPage = () => (
	<div>
		<h1>Hat's Page</h1>
	</div>
)

const HomePage = () => (
	<Fragment>
		{/* <div>
			<Directory />
		</div> */}
		<Route exact path='/' component={HomePage}></Route>
		<Route path='hats' component={HatsPage}></Route>
	</Fragment>
)


export default HomePage;