import "./contactSection.scss";

import FacebookIcon from "../../../icons/facebook-violet.svg";
import InstagramIcon from "../../../icons/instagram-violet.svg";
import LinkedInIcon from "../../../icons/linkedin-violet.svg";
import PropTypes from "prop-types";
import React from "react";

const ContactSection = ({
  title,
  phone,
  email,
  address1,
  address2,
  facebookLinkTo,
  linkedInLinkTo,
  instagramLinkTo,
  latitude,
  longitude,
  mobile = false,
}) => (
  <section className='contact-section'>
    <div className='contact-section__card-wrapper'>
      <div className='contact-section__card'>
        <h2>{title}</h2>
        <p>{phone}</p>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          {address1}
          <br />
          {address2}
        </p>
        <p>
          <a href={instagramLinkTo} target='_blank' rel='noopener noreferrer'>
            <img src={InstagramIcon} alt='Instagram Pauline Gorlier' />
          </a>
          <a href={linkedInLinkTo} target='_blank' rel='noopener noreferrer'>
            <img src={LinkedInIcon} alt='Linked In Pauline Gorlier' />
          </a>
          <a href={facebookLinkTo} target='_blank' rel='noopener noreferrer'>
            <img src={FacebookIcon} alt='Facebook Pauline Gorlier' />
          </a>
        </p>
      </div>
    </div>
    <img
      src='/img/cabinet.jpg'
      alt='Cabinet'
      className='contact-section__image'
    />
    {/* <div className='contact-section__map'>
			<Map
				latitude={Number.parseFloat(latitude)}
				longitude={Number.parseFloat(longitude)}
				mobile={mobile}
			/>
		</div> */}
  </section>
);

ContactSection.propTypes = {
  title: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address1: PropTypes.string.isRequired,
  address2: PropTypes.string.isRequired,
  facebookLinkTo: PropTypes.string.isRequired,
  linkedInLinkTo: PropTypes.string.isRequired,
  instagramLinkTo: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  mobile: PropTypes.bool,
};

export default ContactSection;
