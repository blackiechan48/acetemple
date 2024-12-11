// Header.jsx
import React from 'react';
import styled from 'styled-components';

// Styled Components
const HeaderContainer = styled.div`
  background-color: #f4ce14;
  color: #222831;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.2rem;
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
  background-color: #f05454;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d94343;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

// Component
const HeroAbc = () => {
  return (
    <HeaderContainer>
      <Title>Break Free from Limits and Step Into Your Power in Just 8 Weeks!</Title>
      <Subtitle>
      80% of people fail their fitness goals without the right plan. dont be a statistic.
      </Subtitle>
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
    </HeaderContainer>
  );
};

export default HeroAbc;
