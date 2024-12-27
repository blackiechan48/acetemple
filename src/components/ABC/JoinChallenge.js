import React from 'react';
import styled from 'styled-components';

// Styled Components
const ChallengeContainer = styled.div`
  background-color: #ffffff; /* White */
  border: 1px solid #ddd; /* Grey border */
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  max-width: 400px;
  margin: 20px auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #222831; /* Black */
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  color: #f05454; /* Red */
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: line-through;
`;

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #222831; /* Black */
  margin: 10px 0;

  span {
    display: block;
    font-size: 1rem;
    color: #6c757d; /* Light grey */
    font-weight: normal;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  text-align: left;
  color: #444;

  li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    &:before {
      content: "✔";
      color: #28a745; /* Green */
      font-weight: bold;
      margin-right: 10px;
    }
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 12px 20px;
  background-color: #28a745; /* Green */
  color: #ffffff; /* White */
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838; /* Darker green */
  }
`;

// Component
const JoinChallengeCard = () => {
  return (
    <ChallengeContainer>
      <Title>THE BODY TRANSFORMATION CHALLENGE</Title>
      <Subtitle>NORMALLY £180</Subtitle>
      <Price>
        £120
        <span>Use code <strong>EARLY </strong> at checkout</span>
      </Price>
      <FeaturesList>
        <li>8-week personalized training & nutrition plan</li>
        <li>Weekly check-ins and progress tracking</li>
        <li>Exclusive access to private group support</li>
        <li>Expert guidance and accountability</li>
      </FeaturesList>
      <CTAButton href="https://buy.stripe.com/9AQeWK5AW8qT5vW5ky" target="_blank" rel="noopener noreferrer">
        Join the Challenge Now
      </CTAButton>
    </ChallengeContainer>
  );
};

export default JoinChallengeCard;
