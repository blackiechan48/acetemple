// Import necessary libraries
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
`;

// Define a styled heading
const HeroHeading = styled.h1`
  font-size: 3rem;
  margin: 0;
  padding: 0;
`;

// Define a styled subheading
const HeroSubheading = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
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

  &:hover {
    background-color: #0056b3;
  }
`;

// Define the Hero component
const Hero = () => {
  return (
    <HeroContainer>
      
      <HeroButton to="/services">Find out more</HeroButton>
    </HeroContainer>
  );
};

export default Hero;
