import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

// Animation for fade-in effect
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

// Styled Components
const FullScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #1a1a1a, #333333);
  color: white;
  padding: 20px;
  animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #f4ce14;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 6vw; /* Scales font based on viewport width */
  }
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: #e0e0e0;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;

const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap; /* Ensures wrapping on small screens */

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const CountdownBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f4ce14;
  padding: 15px 20px;
  border-radius: 10px;
  width: 80px;
  color: #1a1a1a;

  @media (max-width: 768px) {
    width: 70px;
    padding: 10px 15px;
  }
`;

const CountdownLabel = styled.span`
  font-size: 0.8rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 12px 20px;
  margin-top: 20px;
  font-size: 1rem;
  color: #1a1a1a;
  background: #f4ce14;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #d4b012;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 18px;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: #f4ce14;
  transition: color 0.3s;

  &:hover {
    color: #d4b012;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ResponsiveImage = styled.img`
  max-width: 100%; /* Ensure it scales within the container */
  height: auto;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

// Countdown Logic
const calculateTimeLeft = () => {
  const targetDate = new Date('November 29, 2024 00:00:00').getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const UnderMaintenance = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <FullScreenContainer>
      {/* <ResponsiveImage src="/images/collage.png" alt="Header Image" /> */}

      <Title>We’re Getting Ready!</Title>
      <Subtitle>Our website is under construction. We’ll be back soon!</Subtitle>

      {/* Countdown Section */}
      <CountdownContainer>
        {countdownItems.map((item, index) => (
          <CountdownBox key={index}>
            <div>{item.value || '0'}</div>
            <CountdownLabel>{item.label}</CountdownLabel>
          </CountdownBox>
        ))}
      </CountdownContainer>

      {/* Notify Me Button */}
      <Button href="mailto:info@example.com">Notify Me</Button>

      {/* Social Media Links */}
      <SocialMediaContainer>
        <SocialIcon href="https://www.facebook.com/Acetemplehealth" target="_blank" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </SocialIcon>
        <SocialIcon href="https://www.tiktok.com/@oluacefit" target="_blank" aria-label="TikTok">
          <FontAwesomeIcon icon={faTiktok} />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/acetemple/" target="_blank" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialIcon>
      </SocialMediaContainer>
    </FullScreenContainer>
  );
};

export default UnderMaintenance;
