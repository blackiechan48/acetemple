import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 185vh;
  background: url(images/olu1.jpg) no-repeat center center;
  background-size: cover;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    background-size: contain;
    height: auto; /* Adjust height for smaller screens */
    padding: 0 20px; /* Add some padding for mobile */
  }
`;

const HeroButton = styled(Link)`
  display: inline-block;
  margin-top: 20px; 
  padding: 12px 24px; 
  font-size: 1.25rem;
  color: black;
  background-color: red;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 510px;

  &:hover {
    background-color: #F4CE14;
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
      <HeroButton to="/services">Start your transformation today</HeroButton>
    </HeroContainer>
  );
};

export default Hero;
