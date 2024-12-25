import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled Components
const HeaderContainer = styled.div`
  background-color: #222831; /* Yellow */
  color: white; /* Black */
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.9rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.9rem;
  }

  span {
    color: #F4CE14; 
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CountdownContainer = styled.div`
  margin: 20px 0;
  text-align: center;
`;

const SmallText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #F4CE14;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CountdownText = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const VideoContainer = styled.div`
  margin: 20px 0;

  iframe {
    width: 100%;
    max-width: 560px;
    height: 315px;
    border: none;
    border-radius: 10px;

    @media (max-width: 768px) {
      height: 200px;
    }
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 15px 25px;
  background-color: #F4CE14; /* Red */
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d94343; /* Darker Red */
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;



// Component
const HeroAbc = () => {
  const [timeLeft, setTimeLeft] = useState('');
  

  // Countdown Timer
useEffect(() => {
  const targetDate = new Date('December 30, 2024 23:59:59'); // Set the countdown end date to December 30, 2023

  const interval = setInterval(() => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      clearInterval(interval);
      setTimeLeft('Enrollment is now closed!');
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }
  }, 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <HeaderContainer>
      <Title>
      <span>Break Free from Your Limit</span> <br></br>and Step Into Your Power in Just 8 Weeks!
      </Title>
      <Subtitle>80% of people fail their fitness goals without the right plan. Don't be a statistic.</Subtitle>
      <CountdownContainer>
        <SmallText>Early bird enrollment closes in:</SmallText>
        <CountdownText>{timeLeft}</CountdownText>
      </CountdownContainer>
      <VideoContainer>
        <iframe
          src="https://www.youtube.com/embed/example" // Replace with your video link
          title="Challenge Introduction Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>
      <CTAButton href="https://buy.stripe.com/9AQeWK5AW8qT5vW5ky" target="_blank" rel="noopener noreferrer">
        Join the Challenge Now
      </CTAButton>
      {/* <SpacesLeftText>Spaces left: {spacesLeft}/30</SpacesLeftText> */}
    </HeaderContainer>
  );
};

export default HeroAbc;
