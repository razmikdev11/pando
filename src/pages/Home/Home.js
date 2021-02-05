import React, { useState } from 'react';
import './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import WmImage from '../../images/w-map.jpg'
import S3Background from '../../icons/background.svg'
import Arrow from '../../icons/arrow.svg'
import Money from '../../icons/money.svg'
import HandShake from '../../icons/handshake.svg'
import Vector from '../../icons/vector.svg'
import Row1 from '../../images/row-1.jpg'
import Row2 from '../../images/row-2.jpg'
import Row3 from '../../images/row-3.jpg'

export const Home = () => {
	const data = [
		{title: `Submit One Loan Request`, text: `Save time, energy, and eliminate hassle.`},
		{title: `Multiple Lenders Review`, text: `No longer are you limited by your debt brokers' \"rolodex\"`},
		{title: `Receive Loan Offers`, text: `Merit-based, rather than relationship-based dealmaking.`}
	]
	const services = [
		{
			logo: Money,
			title: `Lorem Ipsum`,
			text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`
		},
		{
			logo: HandShake,
			title: `Lorem Ipsum`,
			text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`
		},
		{
			logo: Vector,
			title: `Lorem Ipsum`,
			text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`
		}
	]
	const newses = [
		{
			img: Row1,
			title: `Lorem Ipsum`,
			text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
			when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
			remaining essentially unchanged.`
		},
		{
			img: Row2,
			title: `Lorem Ipsum`,
			text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
			when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
			remaining essentially unchanged.`
		},
		{
			img: Row3,
			title: `Lorem Ipsum`,
			text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
			when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
			remaining essentially unchanged.`
		}
	]
	const items = [1, 2, 3]

	const [page, setPage] = useState(1)

	const changePage = page => {
		setPage(page)
	}

	return (
		<>
			<Header />
			<div className='home-container'>
				<div className='section1'>
					<div className='img-background'>
						<div className='fone'>
							<span className='title'>Debt Brokering, Modernized</span>
							<span className='text'>Pando is a leading, data-driven, AI-based commercial real estate capital broker, optimizing</span>
							<span className='text'>capital providers' deal flow while minimizing commercial real estate financing costs.</span>
						</div>
					</div>
					<div className='section1-info'>
						<div>
							{
								data.map((item, index) => (
									<div
										key={index}
										className='info-item__container'
									>
										<div className='item-number'>{index + 1}</div>
										<div className='item-info'>
											<span className='info-title'>{item.title}</span>
											<span className='info-text'>{item.text}</span>
										</div>
									</div>
								))
							}
						</div>
						<button className='gold-button lear-more-button'>Learn More</button>
					</div>
				</div>
				<div className='section2'>
					<div className='section2-body'>
						<span className='section-header'>About Us</span>
						<div className='section2-info'>
							<img className='section2-img' src={WmImage} />
							<div>
								<p className='section2-title'>Our Approach</p>
								<p className='section2-text'>We conduct our business using in-depth analytical tools and financial modeling methodologies to provide unique insights to ensure optimal results for our clients.</p>
								<p className='section2-text'>We align our financial and business success with our clients to ensure value creation in the short and long term.</p>
								<p className='section2-text'>We create and maintain long-term relationships with global institutional investors, banks, family offices, and ultra-high net worth individuals.</p>
								<p className='section2-text'>We go the extra mile for our clients and partners to ensure the best possible results in every deal we conduct.</p>
							</div>
						</div>
					</div>
				</div>
				<div className='section3'>
					<div className='section3-body'>
						<span className='section-header'>Our Services</span>
						<div className='section3-info'>
							{
								services.map((service, index) => (
									<div
										key={index}
										className='section3-info__item'
									>
										<div className='section3-img-container'>
											<img className='section3-bg-image' src={S3Background} />
											<img className='section3-item-image' src={service.logo} />
										</div>
										<div className='section3-item-info'>
											<p className='section3-item-title'>
												{service.title}
											</p>
											<p className='section3-item-text'>
												{service.text}
											</p>
										</div>
										<img className='section3-arrow-image' src={Arrow} />
									</div>
								))
							}
						</div>
					</div>
				</div>
				<div className='section4'>
					<div className='section4-body'>
						<span className='section-header'>NEWS</span>
						<div className='section4-info'>
							{
								items.map((item, index) => (
									<div
										key={index}
										className={`section4-slider-container ${item === page ? 'active' : ''}`}
									>
										{
											newses.map((news, index) => (
												<div
													key={index}
													className='section4-info__item'
												>
													<img className='section4-item-img' src={news.img} />
													<div className='section4-item-info'>
														<p className='section4-item-title'>
															{news.title}
														</p>
														<p className='section4-item-text'>
															{news.text}
														</p>
														<button className='gold-button lear-more-button'>Learn More</button>
													</div>
												</div>
											))
										}

									</div>
								))
							}
							<div className='section4-info-page'>
								{
									items.map((item, index) => (
										<span
											key={index}
											className={`page-item ${item === page ? 'active' : ''}`}
											onClick={() => changePage(item)}
										></span>
									))
								}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Home;