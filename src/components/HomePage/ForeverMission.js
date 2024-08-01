import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  padding-bottom: 20px;
`;

const TextSection = styled.div`
  width: 30%;
  padding: 20px;
  background-color: yellow;
`;

const ImageSection = styled.div`
  width: 70%;
  overflow: hidden;
  position: relative;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 200px;
  height: 200px;
  transition: width 1s, height 1s;
  ${props => props.isActive && css`
    width: 600px;
    height: 600px;
  `}
`;

const CallToAction = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  text-align: center;
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
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Container>
      <TextSection>
        <h1>About Olu</h1>
        {/* <h2>Welcome to my website </h2> */}
        <p>I'm dedicated personal trainer with almost a decade of experience.
           I hold a degree in Sports and Exercise from Coventry University and have a background in American football and have taken part 
           competitive bodybuilding</p>
           _______________________________________________
           <h2>My Philosophy</h2>
           I believe in making fitness enjoyable and sustainable. My goal is to help you achieve results without hating tthe process because thats 
           the only way to ensure you keep the results. 
           _______________________________________________
           <h2> What I Offer </h2>
            *Custom training plan - Tailored workouts to suit and meet your goals
            * Nutritional Guidance: Tips for optimal performance and recovery.
            *Support and Motivation: Consistent encouragement to keep you on track.
            *Flexibility: In-person and online sessions to suit your schedule.
            ____________________________________________
          {/* <h2>Why Choose Me</h2>
          I've worked with clients from various backgrounds, helping them transform their lives. 
          I focus on your overall well-being, ensuring a balanced approach to fitness */}

          <CallToAction>
          <h4>Your transformation is A call away </h4>
          <Button href="https://calendly.com/acetemple/consultation" target="_blank" rel="noopener noreferrer">
            Request a call back 
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
