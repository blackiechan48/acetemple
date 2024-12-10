// BenefitsSection.jsx
import React from 'react';
import styled from 'styled-components';

const BenefitsContainer = styled.div`
  background-color: #dddddd;
  padding: 40px 20px;
  text-align: center;
`;

const BenefitItem = styled.div`
  margin-bottom: 20px;
`;

const EBenefitsSection = () => {
  const benefits = [
    { feature: 'Expert-designed workouts and meal plans', benefit: 'Feel confident with a proven roadmap.' },
    { feature: 'Weekly progress tracking', benefit: 'Celebrate every milestone and stay motivated.' },
    { feature: 'Fun gamified system with rewards', benefit: 'Enjoy every step of the journey!' },
  ];

  return (
    <BenefitsContainer>
      <h2>Why My Challenge Works for You!</h2>
      {benefits.map((item, index) => (
        <BenefitItem key={index}>
          <strong>{item.feature}</strong>: {item.benefit}
        </BenefitItem>
      ))}
    </BenefitsContainer>
  );
};

export default EBenefitsSection;
