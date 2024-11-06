// src/components/UnderMaintenance.js
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 420px;
  margin: 0 auto;
  min-height: 100vh; /* Ensures it takes the full viewport height if needed */
  text-align: center;
  background-color: #dddddd;
  background-image: url('/under-construction/santa.png');
  background-size: cover;
  background-position: center;
  padding: 30px 20px;
  animation: ${fadeIn} 1s ease-in;
  overflow: hidden; /* Prevents any overflow issues */

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const Title = styled.h1`
  color: #f4ce14;
  font-size: 2rem;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

const Message = styled.p`
  color: white;
  font-size: 1rem;
  max-width: 90%;
  line-height: 1.6;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: 1.1rem;
  margin-top: 15px;
  color: #222831;
  flex-wrap: wrap;
`;

const CountdownBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4ce14;
  padding: 8px 15px;
  border-radius: 8px;
  color: #ffffff;
  width: 70px;
  transition: background 0.3s ease;

  &:hover {
    background-color: #f05454;
  }

  @media (max-width: 768px) {
    width: 60px;
  }
`;

const CountdownLabel = styled.span`
  font-size: 0.8rem;
  color: #ffffff;
`;

const Footer = styled.p`
  color: #f05454;
  font-size: 0.9rem;
  margin-top: 20px;
  max-width: 90%;
  margin-bottom: 20px;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: #222831;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #f4ce14;
  }
`;

// Function to calculate time left
const calculateTimeLeft = () => {
  const targetDate = new Date('November 18, 2024 00:00:00').getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 / 60) % 60)),
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
    <Container>
      <Title>Get on Santa's Nice List 🎅✨</Title>
      <Message>
        Our website is off getting a festive upgrade, but we don’t want you to miss out! Drop your email below to stay updated and receive exclusive holiday fitness tips!
      </Message>

      <CountdownContainer>
        {countdownItems.map((item, index) => (
          <CountdownBox key={index}>
            <div>{item.value || '0'}</div>
            <CountdownLabel>{item.label}</CountdownLabel>
          </CountdownBox>
        ))}
      </CountdownContainer>

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

      <Footer>
        Thank you for your patience – unlike Santa, we won’t keep you waiting till Christmas Eve!
      </Footer>
    </Container>
  );
};

export default UnderMaintenance;
