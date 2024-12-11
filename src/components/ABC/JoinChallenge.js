import React from 'react';
import styled, { keyframes } from 'styled-components';
import CTAButton from './CTAButton'; // Reuse the CTAButton component

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: #dddddd;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #222831;
  margin-bottom: 15px;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 1.2rem;
  color: #222831;
`;

const strikeAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const OldPrice = styled.span`
  position: relative;
  color: #f05454;
  font-weight: bold;
  margin-right: 10px;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #f05454;
    animation: ${strikeAnimation} 0.5s ease forwards;
  }
`;

const NewPrice = styled.span`
  font-weight: bold;
  color: green;
`;

const DiscountNote = styled.p`
  font-size: 0.9rem;
  color: #222831;
  margin-top: 10px;
`;

const JoinChallenge = () => {
  const handleJoinClick = () => {
    window.open('https://buy.stripe.com/9AQeWK5AW8qT5vW5ky', '_blank');
  };

  return (
    <Container>
      <Title>Early Bird Price!</Title>
      <PriceWrapper>
        <OldPrice>£180</OldPrice>
        <NewPrice>£120</NewPrice>
      </PriceWrapper>
      <DiscountNote>Use code <strong>EARLYBIRD</strong> at checkout</DiscountNote>
      <CTAButton onClick={handleJoinClick}>Join the Challenge Now</CTAButton>
    </Container>
  );
};

export default JoinChallenge;
