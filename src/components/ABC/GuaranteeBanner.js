import React from 'react';
import styled from 'styled-components';

// Styled container for the guarantee message
const GuaranteeContainer = styled.div`
  background-color: #4caf50;  /* Green background for trust */
  color: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;  /* Center the banner */
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px;
    max-width: 90%;  /* Make it responsive */
  }
`;

// Component definition
const GuaranteeBanner = () => {
  return (
    <GuaranteeContainer>
      Guaranteed Results or Your Money Back!
    </GuaranteeContainer>
  );
};

export default GuaranteeBanner;
