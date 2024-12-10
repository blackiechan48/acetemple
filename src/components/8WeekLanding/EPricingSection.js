// PricingSection.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const PricingContainer = styled.div`
  background-color: #ffffff;
  text-align: center;
  padding: 40px 20px;
`;

const Price = styled.div`
  font-size: 2rem;
  margin: 20px 0;
`;

const EPricingSection = () => {
  const [isSubscriber, setIsSubscriber] = useState(false); // Simulate email subscriber toggle
  const earlyBirdPrice = isSubscriber ? '£99' : '£120';

  return (
    <PricingContainer>
      <h2>Early Bird Pricing</h2>
      <Price>
        <del>£180</del> {earlyBirdPrice}
      </Price>
      {isSubscriber && <p>You’ve unlocked the subscriber discount!</p>}
      <button style={{ background: '#f05454', color: 'white', padding: '10px 20px' }}>
        Join Now
      </button>
    </PricingContainer>
  );
};

export default EPricingSection;
