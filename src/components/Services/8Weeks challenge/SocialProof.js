import React from 'react';
import styled, { keyframes } from 'styled-components';


const testimonials = [
  "This program changed my life!",
  "I cant believe I acheived this transformation in just 8 weeks!",
  "Highly recommend this challenge to everyone!",
];


const images = [
  '/images/result progress pics/aqib.png',
  '/images/result progress pics/Damaris.png',
  '/images/result progress pics/sike.png',
  '/images/result progress pics/charlot.png',
  '/images/result progress pics/P.png'
];

// Keyframe animations
const scrollRightToLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollLeftToRight = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(50%); }
`;

// Styled components
const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 1em;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5em; /* Adjust title size for mobile */
  }
`;

const ScrollingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 450px;

  @media (max-width: 768px) {
    height: 280px; /* Adjust height for mobile */
  }
`;

const ImageSlider = styled.div`
  display: flex;
  width: 200%; /* Adjusted to accommodate duplicates */
  animation: ${scrollRightToLeft} 30s linear infinite; /* Slower scroll speed */

  @media (max-width: 768px) {
    animation: ${scrollRightToLeft} 25s linear infinite; /* Slower for mobile */
  }
`;

const TestimonialSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200%;
  animation: ${scrollLeftToRight} 30s linear infinite; /* Slower scroll speed */

  @media (max-width: 768px) {
    animation: ${scrollLeftToRight} 25s linear infinite; /* Slower for mobile */
  }
`;

const Image = styled.img`
  width: auto; /* Maintain aspect ratio */
  height: 100%; /* Fill height */
  max-width: 300px; /* Limit max width */
  border-radius: 15px; /* Rounded edges */
  margin: 10px;

  @media (max-width: 768px) {
    max-width: 150px; /* Smaller size for mobile */
    height: auto; /* Maintain aspect ratio */
  }
`;

const Testimonial = styled.div`
  padding: 20px;
  margin: 10px;
  font-size: 1.2em;
  background-color: #f0f0f0;
  border-radius: 10px;
  min-width: 300px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 10px;
    min-width: 150px;
  }
`;

const SocialProof = () => {
  return (
    <Container>
      <Title>Some Previous Transformations</Title>
      <ScrollingContainer>
        {/* Images Slider */}
        <ImageSlider>
          {[...images, ...images].map((imgSrc, index) => (
            <Image key={index} src={imgSrc} alt={`Image ${index + 1}`} />
          ))}
        </ImageSlider>

        {/* Testimonials Slider */}
        <TestimonialSlider>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Testimonial key={index}>
              {testimonial}
            </Testimonial>
          ))}
        </TestimonialSlider>
      </ScrollingContainer>
    </Container>
  );
};

export default SocialProof;
