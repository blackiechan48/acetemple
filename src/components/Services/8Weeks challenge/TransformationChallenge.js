import React from 'react';
import AbcHero from './AbcHero';
import SocialProof from './SocialProof'; // Corrected the import
import WhatsIncluded from './WhatsIncluded';
import CallToAction from './CallToAction';
import VideoTestimonial from './VideoTestimonial'

const TransformationChallenge = () => {
  return (
    <>
      <AbcHero />
      <SocialProof /> {/* Corrected the component name */}
      <VideoTestimonial/>
      <WhatsIncluded/>
      <CallToAction/>
    </>
  );
};

export default TransformationChallenge;
