import React from 'react';
import PropTypes from 'prop-types';
import BreadCrumbs from '../../BreadCrumbs';
import Introduction from '../../sections/Introduction';
import Temoignages from '../../sections/Temoignages';
// import BlogSection from '../../sections/BlogSection';
import ContactSection from '../../sections/ContactSection';

import content from '../../../data/contact.json';

const ContactPage = ({ mobile = false }) => (
  <main>
    <BreadCrumbs breadcrumbs={content.Breadcrumbs} />
    <Introduction
      title={content.Introduction.title}
      paragraph={content.Introduction.paragraph}
      image={content.Introduction.image}
      citation={content.Introduction.citation}
    />
    <ContactSection
      title={content.Contact.title}
      phone={content.Contact.phone}
      email={content.Contact.email}
      address1={content.Contact.address1}
      address2={content.Contact.address2}
      facebookLinkTo={content.Contact.facebookLinkTo}
      linkedInLinkTo={content.Contact.linkedInLinkTo}
      latitude={content.Contact.latitude}
      longitude={content.Contact.longitude}
    />
    <Temoignages mobile={mobile} />
    {/* <BlogSection /> */}
  </main>
);

ContactPage.propTypes= {
  mobile: PropTypes.bool,
};

export default ContactPage;
