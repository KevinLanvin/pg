import React from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import Introduction from '../../sections/Introduction';
import Temoignages from '../../sections/Temoignages';
// import BlogSection from '../../sections/BlogSection';
import ContactSection from '../../sections/ContactSection';

import content from '../../../data/contact.json';

const ContactPage = () => (
  <main>
    <BreadCrumbs breadcrumbs={content.Breadcrumbs} />
    <Introduction
      title={content.Introduction.title}
      paragraph={content.Introduction.paragraph}
      image={content.Introduction.image}
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
    <Temoignages />
    {/* <BlogSection /> */}
  </main>
);

export default ContactPage;
