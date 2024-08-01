// App.js
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    color: #333;
  }
`;

const FullScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  padding: 40px 20px;
  box-sizing: border-box;
`;

const TestimonialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  margin-bottom: 40px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 30%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TestimonialText = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0;
  padding: 20px;
  background: #f1f1f1;
  border-radius: 8px;
`;

const Testimonials = () => {
  const testimonialsData = [
    {
      images: [
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
      ],
      text: "This is an amazing testimonial text that captures the essence of the service provided. The experience was outstanding and I highly recommend it to everyone."
    },
    {
      images: [
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
      ],
      text: "Another great testimonial. The service exceeded my expectations and I am very pleased with the results."
    },
    {
      images: [
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
      ],
      text: "This is an amazing testimonial text that captures the essence of the service provided. The experience was outstanding and I highly recommend it to everyone."
    },
    {
      images: [
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
      ],
      text: "Another great testimonial. The service exceeded my expectations and I am very pleased with the results."
    }
    // Add more testimonials as needed
  ];

  return (
    <>
      <GlobalStyle />
      <FullScreenContainer>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialSection key={index}>
            <ImageContainer>
              {testimonial.images.map((src, idx) => (
                <Image key={idx} src={src} alt={`Image ${idx + 1}`} />
              ))}
            </ImageContainer>
            <TestimonialText>{testimonial.text}</TestimonialText>
          </TestimonialSection>
        ))}
      </FullScreenContainer>
    </>
  );
};

export default Testimonials;
