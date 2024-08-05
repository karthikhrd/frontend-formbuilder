import React from 'react';
import './LovedSection.css';

const LovedSection = () => {
  const logos = [
    { name: 'iBanFirst', src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/iban.png?alt=media&token=924f8d8b-1839-4e25-a3ae-87237dfbec76' },
    { name: 'lemlist', src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/lemlist.png?alt=media&token=6ae43d8d-8d87-4586-b82e-68a1c829da21' },
    { name: 'MakerLead', src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/maker.png?alt=media&token=a6c45501-2d0b-4eff-93f8-4206522d4171' },
    { name: 'WebiSharp', src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/webi.png?alt=media&token=a21ffea4-2ca5-4cb6-bc0d-bd67f0f811e8' },
    { name: 'SOCIALHACKRS', src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/social.png?alt=media&token=ff442008-4816-4dd3-81cb-48da56e15f73' },
    { name: 'PINPOINT INTERACTIVE', src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/pin.png?alt=media&token=b55111fc-73a8-4f5e-ad2a-66a80a8102b0' },
    { name: 'BOLE', src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/bole.png?alt=media&token=2fde5587-f1ad-4e03-8214-9701adee22df' },
    { name: 'Awwwsome', src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-571e2.appspot.com/o/aww.png?alt=media&token=489a271b-bbea-49b3-badd-e17c8eb3e819' },
  ];

  return (
    <section className="lovedSection">
      <div className="lovedSection__container">
        {logos.map((logo, index) => (
          <div key={index} className="lovedSection__logoWrapper">
            <img src={logo.src} alt={logo.name} className="lovedSection__logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LovedSection;