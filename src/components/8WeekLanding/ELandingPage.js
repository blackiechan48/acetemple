// LandingPage.jsx
import React from 'react';
import EHeroSection from './EHeroSection';
import EBenefitsSection from './EBenefitsSection';
import EPricingSection from './EPricingSection';
import ESpacesLeft from './ESpacesLeft';

const LandingPage = () => {
  return (
    <div>
      <EHeroSection countdownDate="January 15, 2024" />
      <EBenefitsSection />
      <ESpacesLeft />
      <EPricingSection />
    </div>
  );
};

export default LandingPage;
