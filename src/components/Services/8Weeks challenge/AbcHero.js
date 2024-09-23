import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(/ABCHERO.png) no-repeat center center;
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
  margin-top: 18px; /* Adjust margin for better positioning */
  padding: 12px 24px; /* Increase padding for better touch target on mobile */
  font-size: 1.25rem;
  color: black;
  background-color: red;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 480px;

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

const AbcHero =() =>{
  return(
    <HeroContainer>
      <HeroButton to="8weekschallenge">Join the challenge now </HeroButton>
    </HeroContainer>
  );
};
export default AbcHero;