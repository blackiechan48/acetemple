import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const TextSection = styled.div`
  width: 30%;
  padding: 20px;
  background-color: yellow;

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

const ImageSection = styled.div`
  width: 70%;
  overflow: hidden;
  position: relative;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 15px;
  }
`;

const Thumbnail = styled.img`
  width: 200px;
  height: 200px;
  transition: width 1s, height 1s;

  ${props => props.isActive && css`
    width: 600px;
    height: 600px;
  `}

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;

    ${props => props.isActive && css`
      width: 300px;
      height: 300px;
    `}
  }
`;

const CallToAction = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  text-align: center;

  @media (max-width: 768px) {
    position: relative;
    margin-top: 10px;
  }
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  color: white;
  background-color: #007bff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const ForeverMission = () => {
  const images = [
    "/images/Home progress pics/Karen.png",
    "/images/Home progress pics/Tom.png",
    "/images/Home progress pics/Tiphaine.png",
    "/images/Home progress pics/Paida.png",
    "/images/Home progress pics/shereen.png",
    "/images/Home progress pics/ali.png",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Container>
      <TextSection>
        <h1>About Olu</h1>
        <p>I'm a dedicated personal trainer with almost a decade of experience.
           I hold a degree in Sports and Exercise from Coventry University, have a background in American football, and have competed in bodybuilding.</p>
        _______________________________________________
        <h2>My Philosophy</h2>
        <p>I believe in making fitness enjoyable and sustainable. My goal is to help you achieve results without hating the process because that’s the only way to ensure lasting success.</p>
        _______________________________________________
        <h2>What I Offer</h2>
        <ul>
          <li>Custom training plan</li>
          <li>Nutritional guidance</li>
          <li>Support and motivation</li>
          <li>Flexibility: In-person and online sessions</li>
        </ul>
        _______________________________________________
        <CallToAction>
          <Button href="/testimonials" target="_blank" rel="noopener noreferrer">
            Click here to see more results
          </Button>
        </CallToAction>
      </TextSection>
      
      <ImageSection>
        {images.map((src, index) => (
          <Thumbnail key={index} src={src} isActive={index === activeIndex} />
        ))}
      </ImageSection>
    </Container>
  );
};

export default ForeverMission;
