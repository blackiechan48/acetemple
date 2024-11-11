// src/components/ForeverMission.js
import React, { useState, useEffect } from 'react';
// import styled, { keyframes } from 'styled-components';
import styled from 'styled-components';

// Responsive container with flex adjustments for mobile
const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

// Responsive text section with font adjustments for readability on smaller screens
const TextSection = styled.div`
  width: 70%;
  padding: 50px;
  background-color: yellow;
  box-sizing: border-box;

  section {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  h1, h2, p, ul {
    margin: 0.5em 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;

    h1 { font-size: 1.5rem; }
    h2 { font-size: 1.2rem; }
    p, ul { font-size: 1rem; }
  }
`;

// Image section with mobile-friendly adjustments for dimensions and horizontal scroll effect
const ImageSection = styled.div`
  width: 40%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px 0;
  }
`;

// Container for scrolling images horizontally
const ImageSlider = styled.div`
  display: flex;
  transition: transform 0.6s ease;
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 100}%)`};
  width: 90%;
`;

// Thumbnail image styles
const Thumbnail = styled.img.attrs({ loading: 'lazy' })`
  width: 100%;
  height: auto;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
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

  // Auto-slide image 
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Container>
      <TextSection>
        <section>
          <h1>Your Fitness and Wellness Journey Starts Here</h1>
          <p>Embark on a personalized fitness journey with us. We are here to support and guide you every step of the way!</p>
        </section>
      </TextSection>

      <ImageSection>
        <ImageSlider activeIndex={activeIndex}>
          {images.map((src, index) => (
            <Thumbnail 
              key={index} 
              src={src} 
              alt={`Progress image of client ${index + 1}`} 
            />
          ))}
        </ImageSlider>

        
      </ImageSection>
    </Container>
  );
};

export default ForeverMission;
