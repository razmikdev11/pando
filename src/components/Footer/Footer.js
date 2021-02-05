import React from "react";
import './Footer.css'
import FooterLogo from '../../icons/footer-logo.svg'

export const Footer = () => {
	const menuItems = [
		'Home',
		'The Process',
		'About Us',
		'Our Services',
		'News',
		'Our Team',
		'Contact Us',
        'Mobile: +1 (737) 333-5940',
        'Email: info@pando-cap.com',
        'Address: 550 Reserve Street, Southlake, TX 76092'
	]

	return (
        <>
            <div className='footer-container'>
                <img src={FooterLogo} />
                <div className='footer-columns-container'>
                    <div className='footer-menu-column'>
                        {
                            menuItems.slice(0, 3).map((item, index) => (
                                <span
                                    key={index}
                                    className='footer-menu-item'
                                >{item}</span>
                            ))
                        }
                    </div>
                    <div className='footer-menu-column'>
                        {
                            menuItems.slice(3, 6).map((item, index) => (
                                <span
                                    key={index}
                                    className='footer-menu-item'
                                >{item}</span>
                            ))
                        }
                    </div>
                    <div className='footer-menu-column'>
                        {
                            menuItems.slice(6, 10).map((item, index) => (
                                <span
                                    key={index}
                                    className={index === 0 ? 'footer-menu-item' : 'footer-menu-contacts'}
                                >{item}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='footer-copyright'>
                <span>©2021 Pando Companies INC. All rights reserved.</span>
            </div>
        </>
	)
}

export default Footer;