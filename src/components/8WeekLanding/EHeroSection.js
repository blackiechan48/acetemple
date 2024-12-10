// HeroSection.jsx
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background-color: #f4ce14;
  text-align: center;
  padding: 40px 20px;
  color: #222831;
`;

const Countdown = styled.div`
  font-size: 1.5rem;
  margin-top: 10px;
  color: #f05454;
`;

const EHeroSection = ({ countdownDate }) => {
  return (
    <HeroContainer>
      <h1>Transform Your Body and Confidence with My 8-Week Challenge!</h1>
      <p>
        Feel stronger, look better, and build habits that last with my proven step-by-step program.
      </p>
      <button style={{ background: '#f05454', color: 'white', padding: '10px 20px' }}>
        Sign Up for My Challenge
      </button>
      <Countdown>Limited spots available—Challenge starts {countdownDate}!</Countdown>
    </HeroContainer>
  );
};

export default EHeroSection;
