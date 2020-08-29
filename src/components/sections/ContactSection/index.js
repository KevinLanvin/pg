import React from 'react';
import PropTypes from 'prop-types';
import LinkedInIcon from '../../../icons/linkedin-violet.svg';
import FacebookIcon from '../../../icons/facebook-violet.svg';
import Map from '../../MyMap';

import './contactSection.scss';

const ContactSection = ({
  title,
  phone,
  email,
  address1,
  address2,
  facebookLinkTo,
  linkedInLinkTo,
  latitude,
  longitude
}) => (
  <section className="contact-section">
    <div className="contact-section__card-wrapper">
      <div className="contact-section__card">
        <h2>{title}</h2>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{address1}<br/>{address2}</p>
        <p>
          <a href={facebookLinkTo}><img src={FacebookIcon} alt="Facebook Pauline Gorlier" /></a>
          <a href={linkedInLinkTo}><img src={LinkedInIcon} alt="Linked In Pauline Gorlier" /></a>
        </p>
      </div>
    </div>
    <div className="contact-section__map">
      <Map
        latitude={Number.parseFloat(latitude)}
        longitude={Number.parseFloat(longitude)}
      />
    </div>
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
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
};

export default ContactSection;
