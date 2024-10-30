import React, { useState, useEffect } from 'react';
import styled, { } from 'styled-components';

// Responsive container with flex adjustments for mobile
const Container = styled.div`
  display: flex;
  height: 100vh;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

// Responsive text section with font adjustments for readability on smaller screens
const TextSection = styled.div`
  width: 23%;
  padding: 20px;
  background-color: yellow;

  h1, h2, p, ul {
    font-size: 1rem; // Default desktop font size
  }

  @media (max-width: 600px) {
    width: 90%;
    padding: 15px;

    h1 { font-size: 1.5rem; }
    h2 { font-size: 1.2rem; }
    p, ul { font-size: 1rem; }
  }
`;

// Image section with mobile-friendly adjustments for dimensions and horizontal scroll effect
const ImageSection = styled.div`
  width: 70%;
  overflow: hidden;
  position: relative;
  display: flex;
  background-color: black;
  align-items: center;

  @media (max-width: 600px) {
    width: 90%;
    height: auto;
    padding: 15px;
  }
`;

// Container for scrolling images horizontally
const ImageSlider = styled.div`
  display: flex;
  transition: transform 0.6s ease;
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 100}%)`};
`;

// Thumbnail image styles
const Thumbnail = styled.img.attrs({ loading: 'lazy' })`
  width: 100%;
  height: auto;
  flex-shrink: 0; // Prevents shrinking when scrolling horizontally

  @media (max-width: 600px) {
    width: 80%;
    height: auto;
  }
`;

// Call-to-action section adjusted for mobile layout
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

// Button styled for full-width on mobile for accessibility
const Button = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  color: white;
  background-color: #007bff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
    width: 80%; // Full width on mobile for easy tapping
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

  // Auto-slide image every 2 seconds, with cleanup on unmount
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, ); 

  return (
    <Container>
      <TextSection>
        <section>
          <h1>About Olu</h1>
          <p>I'm a dedicated personal trainer with almost a decade of experience. I hold a degree in Sports and Exercise from Coventry University, have a background in American football, and have competed in bodybuilding.</p>
        </section>
        <hr />
        <section>
          <h2>My Philosophy</h2>
          <p>I believe in making fitness enjoyable and sustainable. My goal is to help you achieve results without hating the process because that’s the only way to ensure lasting success.</p>
        </section>
        <hr />
        <section>
          <h2>What I Offer</h2>
          <ul>
            <li>Custom training plan</li>
            <li>Nutritional guidance</li>
            <li>Support and motivation</li>
            <li>Flexibility: In-person and online sessions</li>
          </ul>
        </section>
        <hr />
        
        <CallToAction>
          <Button href="/testimonials" target="_blank" rel="noopener noreferrer">
            Click here to see more results
          </Button>
        </CallToAction>
      </TextSection>
      
      <ImageSection>
        <ImageSlider activeIndex={activeIndex}>
          {images.map((src, index) => (
            <Thumbnail 
              key={index} 
              src={src} 
              alt={`Image ${index + 1}`} 
            />
          ))}
        </ImageSlider>
      </ImageSection>
    </Container>
  );
};

export default ForeverMission;
