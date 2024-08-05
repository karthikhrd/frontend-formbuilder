import React, { useEffect, useRef } from 'react';
import './OurPartnerSection.css';

const partnerLogos = [
  { name: 'Gmail', url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/gmail.png?alt=media&token=dd8e47bf-3298-4023-adab-fe23ff8406c3' },
  { name: 'Mailchimp', url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/mailchimp.png?alt=media&token=32c6c6cf-ab89-4f55-b27a-9d23eb6394e6' },
  { name: 'Notion', url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/notation.png?alt=media&token=8f2ae739-bfe4-48c6-a967-e4c8b9354ae6' },
  { name: 'Webflow', url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/webflow.png?alt=media&token=13aeed03-ec2c-4951-937c-b43ca7df9f48' },
  { name: 'WordPress', url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/wordpres.png?alt=media&token=7a232878-6216-4dd5-b008-bdc19a18fb1c' },
  { name: 'Google Calendar', url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/google%20calender.png?alt=media&token=f2ad222c-3405-4c04-b262-0fd219cf52d8' },
  { name: 'Make', url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/make.png?alt=media&token=ead10859-e9fa-43ef-ada2-08a9e64e8fcc' },
  { name: 'Google Drive', url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/google%20drive.png?alt=media&token=4b5013d0-7f15-4086-b9d9-131d031b9f62' },
  { name: 'Slack', url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/slack.png?alt=media&token=198dc935-ea0f-4534-8159-9dcb8600a837' },
  { name: 'Shopify', url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/shopify.png?alt=media&token=864be8d6-0d92-43e8-98af-38e145462a23' },
  { name: 'Airtable', url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/airbable.png?alt=media&token=e1e3fb09-eba2-46f9-ad28-c2ca7ae291fb' },
  { name: 'Google Sheets', url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/google%20sheeth.png?alt=media&token=c34d8575-18da-43f7-bfde-c2bec8e1c5ad' },
  { name: 'Zapier', url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/zaiper.png?alt=media&token=76797670-01fe-4618-a7b2-7c4656857be7' },
  { name: 'Crunchbase', url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/crunchbase.png?alt=media&token=c2e63f01-0061-464c-9de9-ac139295c09d' },
  { name: 'Salesforce', url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/loved%20sec.svg?alt=media&token=fb0bde30-7cbb-4664-a7bc-9b04df69ac2c' },
];

const OurPartnerSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;

      let scrollPosition = 0;
      const scroll = () => {
        scrollPosition += 1;
        if (scrollPosition > scrollWidth - clientWidth) {
          scrollPosition = 0;
        }
        scrollContainer.scrollTo(scrollPosition, 0);
      };

      const intervalId = setInterval(scroll, 50);

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <section className="OurPartnerSection">
      <div className="OurPartnerSection__scrollContainer" ref={scrollRef}>
        <div className="OurPartnerSection__grid">
          {partnerLogos.map((partner, index) => (
            <div key={index} className="OurPartnerSection__logoWrapper">
              <img src={partner.url} alt={partner.name} className="OurPartnerSection__logo" />
            </div>
          ))}
        </div>
      </div>
      <div className="OurPartnerSection__content">
        <h2 className="OurPartnerSection__title">Integrate with any platform</h2>
        <p className="OurPartnerSection__description">
          Typebot offers several native integrations blocks as well as instructions on how to embed typebot on particular platforms
        </p>
      </div>
    </section>
  );
};

export default OurPartnerSection;