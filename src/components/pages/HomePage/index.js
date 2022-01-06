import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Banner from '../../sections/Banner'
import Services from '../../sections/Services'
import SplittedSection from '../../sections/SplittedSection'
import Temoignages from '../../sections/Temoignages'
import Contact from '../../sections/ContactSection'

import content from '../../../data/homepage.json'
import contact from '../../../data/contact.json'
import DisclaimerSection from '../../sections/DisclaimerSection'

const HomePage = ({ mobile = false }) => {
	const descriptionEl = useRef('description')
	return (
		<main>
			<Helmet>
				<title>{content.Head.title}</title>
				<meta name='title' content={content.Head.title} />
				<meta name='description' content={content.Head.description} />
				<meta property='og:url' content={content.Head.url} />
				<meta property='og:title' content={content.Head.title} />
				<meta property='og:description' content={content.Head.description} />
				<meta property='og:image' content={content.Head.image} />
				<meta property='twitter:url' content={content.Head.url} />
				<meta property='twitter:title' content={content.Head.title} />
				<meta
					property='twitter:description'
					content={content.Head.description}
				/>
				<meta property='twitter:image' content={content.Head.image} />
			</Helmet>

			<Banner
				image={content.MainTitle.Banner.url}
				imageAlt={content.MainTitle.Banner.alternativeText}
				title={content.MainTitle.title}
				onClick={() => {
					window.scrollTo({
						left: 0,
						top: descriptionEl.current.offsetTop - 126,
						behavior: 'smooth',
					})
				}}
			/>
			<div ref={descriptionEl}>
				<SplittedSection
					title={content.Description.title}
					text={content.Description.paragraph}
					citation={content.Description.citation}
					imageSource={content.Description.image.url}
					imageAlt={content.Description.image.alternativeText}
					isTextOnRight
					roundedImage
				/>
			</div>
			<Services
				title={content.Services.title}
				services={content.Services.services}
				mobile={mobile}
			/>
			<SplittedSection
				title={content.QuandConsulter.title}
				text={content.QuandConsulter.paragraph}
				linkLabel={content.QuandConsulter.linkLabel}
				imageSource={content.QuandConsulter.image.url}
				imageAlt={content.QuandConsulter.image.alternativeText}
				isTextOnRight
				isButtonAlt
			/>
			<SplittedSection
				title={content.QuiSuisJe.title}
				text={content.QuiSuisJe.paragraph}
				linkLabel={content.QuiSuisJe.linkLabel}
				linkTo={content.QuiSuisJe.linkTo}
				imageSource={content.QuiSuisJe.image.url}
				imageAlt={content.QuiSuisJe.image.alternativeText}
				isButtonAlt
				hasFlower
				altColor
			/>
			<Temoignages />
			<Contact
				title={contact.Contact.title}
				phone={contact.Contact.phone}
				email={contact.Contact.email}
				address1={contact.Contact.address1}
				address2={contact.Contact.address2}
				facebookLinkTo={contact.Contact.facebookLinkTo}
				linkedInLinkTo={contact.Contact.linkedInLinkTo}
				instagramLinkTo={contact.Contact.instagramLinkTo}
				latitude={contact.Contact.latitude}
				longitude={contact.Contact.longitude}
				mobile={mobile}
			/>
			<DisclaimerSection />
		</main>
	)
}

HomePage.propTypes = {
	mobile: PropTypes.bool,
}
export default HomePage
