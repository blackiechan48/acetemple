import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 119vh;
  background: url(/ABCHERO.png) no-repeat center center;
  background-size: cover;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    background-size: contain;
    height: auto; 
    padding: 0 20px; 
}
`;


const HeroButton = styled(Link)`
  display: inline-block;
  margin-top: 18px; 
  padding: 12px 24px; 
  font-size: 1.25rem;
  color: black;
  background-color: red;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 520px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 758px) {
    font-size: 1rem;
    padding: 10px 20px; 
    margin-top: 350px;
    Margin-bottom: 10px;
  }
`;
const Subtext = styled.p`
 font-size: 2em;
  margin-top: 3px;
  color: red;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;


const AbcHero =() =>{
  return(
    <HeroContainer>
      <HeroButton to="8weekschallenge">Be the first to know about the next challenge </HeroButton>
      {/* <Subtext>Next challenge starts on the 14th of october</Subtext> */}
    </HeroContainer>
  );
};
export default AbcHero;