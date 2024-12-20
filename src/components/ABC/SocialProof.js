import React from 'react';
import styled, { keyframes } from 'styled-components';

const testimonials = [
  "This program changed my life!",
  "I can't believe I achieved this transformation in just 8 weeks!",
  "Highly recommend this challenge to everyone!",
];

const images = [
  '/images/result progress pics/aqib.png',
  '/images/result progress pics/Damaris.png',
  '/images/Before and afters/Diamanta.jpg',
  '/images/result progress pics/charlot.png',
  '/images/result progress pics/P.png',
  '/images/Before and afters/sherene.jpg',
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

// const Title = styled.h2`
//   font-size: 2em;
//   color: #333;
//   margin-bottom: 20px;

//   @media (max-width: 768px) {
//     font-size: 1.5em;
//   }
// `;

const ScrollingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 450px;

  @media (max-width: 600px) {
    height: 280px;
  }
`;

const ImageSlider = styled.div`
  display: flex;
  width: 200%;
  animation: ${scrollRightToLeft} 40s linear infinite;

  @media (max-width: 600px) {
    animation: ${scrollRightToLeft} 10s linear infinite;
  }
`;

const TestimonialSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200%;
  animation: ${scrollLeftToRight} 40s linear infinite;

  @media (max-width: 600px) {
    animation: ${scrollLeftToRight} 10s linear infinite;
  }
`;

const Image = styled.img`
  width: auto;
  height: 100%;
  max-width: 300px;
  border-radius: 15px;
  margin: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-width: 150px;
    height: auto;
  }
`;

const Testimonial = styled.div`
  padding: 20px;
  margin: 10px;
  font-size: 1.2em;
  background-color: #f9f9f9;
  border-radius: 10px;
  min-width: 300px;
  text-align: center;
  color: #333;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 1em;
    padding: 10px;
    min-width: 150px;
  }
`;

const SocialProof = () => {
  return (
    <Container>
      {/* <Title>Some Previous Transformations</Title> */}
      <ScrollingContainer aria-label="Image and testimonial scrolling showcase">
        {/* Images Slider */}
        <ImageSlider aria-label="Previous transformations">
          {[...images, ...images].map((imgSrc, index) => (
            <Image key={index} src={imgSrc} alt={`Transformation ${index + 1}`} />
          ))}
        </ImageSlider>

        {/* Testimonials Slider */}
        <TestimonialSlider aria-label="Client testimonials">
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
