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
  width: 100%;
  max-width: 500px; /* Prevents content from becoming too wide */
  margin: 0 auto; /* Centers the container */
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #1a1a1a, #333333);
  color: white;
  padding: 20px;
  box-sizing: border-box; /* Ensures padding doesn't overflow */

  @media (max-width: 668px) {
    padding: 15px;
  }
`;

const Logo = styled.img`
  width: 250px; /* Adjust the size */
  height: auto;
  margin-bottom: 20px;

  @media (max-width: 668px) {
    width: 120px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #f4ce14;
  margin-bottom: 10px;

  @media (max-width: 668px) {
    font-size: 6vw; /* Scales font based on viewport width */
  }
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: #e0e0e0;
  margin-bottom: 20px;

  @media (max-width: 668px) {
    font-size: 4vw;
  }
`;

const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap; /* Ensures wrapping on small screens */

  @media (max-width: 668px) {
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

  @media (max-width: 668px) {
    width: 70px;
    padding: 10px 15px;
  }
`;

const CountdownLabel = styled.span`
  font-size: 0.8rem;
  font-weight: bold;

  @media (max-width: 668px) {
    font-size: 0.7rem;
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

  @media (max-width: 668px) {
    font-size: 1.2rem;
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
      <Logo src={"/LOGO FULL_.png"} alt="Logo" />
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
