import React from 'react';
import styled from 'styled-components';

// Styled Components
const ChallengeIntroContainer = styled.div`
  background-color: #222831; /* Black */
  color: white;
  padding: 50px 20px;
  text-align: center;
`;

const ChallengeLogo = styled.img`
  max-width: 200px;
  margin: 0 auto 20px auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #f4ce14; /* Yellow */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #f05454; /* Red */

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #dddddd; /* Grey */

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const HighlightedText = styled.span`
  font-weight: bold;
  color: #f4ce14; /* Yellow */
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 15px 30px;
  background-color: #f05454; /* Red */
  color: white;
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
    padding: 10px 25px;
  }
`;

// Component
const ChallengeIntroduction = () => {
  return (
    <ChallengeIntroContainer>
      <ChallengeLogo src="/path/to/logo.png" alt="ACE Challenge Logo" />
      <Title>Welcome to the Ace Body Transformation Challenge</Title>
      <Subtitle>It’s not just about losing weight or gaining muscle…</Subtitle>
      <Paragraph>
        <HighlightedText>It’s about transforming your life.</HighlightedText>
      </Paragraph>
      <Paragraph>
        With the <HighlightedText>ACE Body Transformation Challenge</HighlightedText>, you’ll have everything you need to finally take control of your fitness journey—no more guesswork, no more quick fixes.
      </Paragraph>
      <Paragraph>
        I will  provide personalised workout plans that adapt to your fitness level, simple nutrition guidance that fits into your lifestyle, and a community of like-minded people to cheer you on every step of the way.
      </Paragraph>
      <Paragraph>
        <HighlightedText>Don’t let another year pass without reaching your goals.</HighlightedText>
      </Paragraph>
      <Paragraph>
        Join the challenge today and make the next 8 weeks the time you’ll look back on and say, <HighlightedText>“That’s where it all changed.”</HighlightedText>
      </Paragraph>
      <Paragraph>Your future self will thank you!</Paragraph>
      <CTAButton href="https://buy.stripe.com/9AQeWK5AW8qT5vW5ky" target="_blank" rel="noopener noreferrer">
        Join The Challenge Now
      </CTAButton>
    </ChallengeIntroContainer>
  );
};

export default ChallengeIntroduction;
