import React from "react";
import { Link, useHistory } from 'react-router-dom'
import './Header.css'
import HeaderLogo from '../../icons/header-logo.svg'

export const Home = () => {
	const history = useHistory();
	const menuItems = [
		{name: 'Home', link: '/'},
		{name: 'The Process', link: '/process'},
		{name: 'About Us', link: '/about'},
		{name: 'Our Services', link: '/services'},
		{name: 'News', link: '/news'},
		{name: 'Contact Us', link: '/contact'},
		{name: 'Our Team', link: '/team'},
	]

	const checkActive = link => {
		return history.location.pathname === link ? 'active' : '';
	}

	return (
		<div className='menu-container'>
			<img src={HeaderLogo} />
			<div className='menu-items'>
				{
					menuItems.map((item, index) => (
						<Link
							key={index}
							to={item.link}
							className={checkActive(item.link)}
						>
							{item.name}
						</Link>
					))
				}
			</div>
			<button className='gold-button start-button'>Start a Loan Application</button>
		</div>
	)
}

export default Home;