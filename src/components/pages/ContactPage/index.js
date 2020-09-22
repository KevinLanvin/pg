import React from 'react';
import PropTypes from 'prop-types';
import BreadCrumbs from '../../BreadCrumbs';
import Introduction from '../../sections/Introduction';
import Temoignages from '../../sections/Temoignages';
// import BlogSection from '../../sections/BlogSection';
import ContactSection from '../../sections/ContactSection';
import { Helmet } from 'react-helmet';

import content from '../../../data/contact.json';

const ContactPage = ({ mobile = false }) => (
  <main>
    <Helmet>
      <title>{content.Head.title}</title>
      <meta name="title" content={content.Head.title} />
      <meta name="description" content={content.Head.description} />
      <meta property="og:url" content={content.Head.url} />
      <meta property="og:title" content={content.Head.title} />
      <meta property="og:description" content={content.Head.description} />
      <meta property="og:image" content={content.Head.image} />
      <meta property="twitter:url" content={content.Head.url} />
      <meta property="twitter:title" content={content.Head.title} />
      <meta property="twitter:description" content={content.Head.description} />
      <meta property="twitter:image" content={content.Head.image} />
    </Helmet>

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
      instagramLinkTo={content.Contact.instagramLinkTo}
      latitude={content.Contact.latitude}
      longitude={content.Contact.longitude}
      mobile={mobile}
    />
    <Temoignages mobile={mobile} />
    {/* <BlogSection /> */}
  </main>
);

ContactPage.propTypes= {
  mobile: PropTypes.bool,
};

export default ContactPage;
