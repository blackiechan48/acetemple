import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Define a styled container for the hero section
const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(/homehero.png) no-repeat center center;
  background-size: cover;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    background-size: contain;
    height: auto; /* Adjust height for smaller screens */
    padding: 0 20px; /* Add some padding for mobile */
  }
`;

// Define a styled heading
const HeroHeading = styled.h1`
  font-size: 3rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Reduce font size for mobile */
  }
`;

// Define a styled subheading
const HeroSubheading = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust subheading size for mobile */
  }
`;

// Define a styled button
const HeroButton = styled(Link)`
  display: inline-block;
  margin-top: 20px; /* Adjust margin for better positioning */
  padding: 12px 24px; /* Increase padding for better touch target on mobile */
  font-size: 1.25rem;
  color: black;
  background-color: red;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 510px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 758px) {
    font-size: 1rem; /* Reduce button font size for mobile */
    padding: 10px 20px; /* Adjust padding for smaller screens */
    margin-top: 350px;
    Margin-bottom: 10px;
  }
`;

// Define the Hero component
const Hero = () => {
  return (
    <HeroContainer>
      {/* <HeroHeading>Welcome to the Transformation</HeroHeading>
      <HeroSubheading>Achieve your fitness goals with our expert guidance</HeroSubheading> */}
      <HeroButton to="/services">Find out more</HeroButton>
    </HeroContainer>
  );
};

export default Hero;
