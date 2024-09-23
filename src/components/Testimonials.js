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
  background: yello;
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
      text: "So glad I was introduced to Olu.. for someone who hated the idea of going to the gym before, I now really see the benefits and enjoy my sessions! Thanks Olu"
    },
    {
      images: [
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
      ],
      text: "Pleased to give a review for Olu's work. Got me back on the fitness bandwagon and worked well despite my past injuries (and forgetting to eat!) holding me back. Got lots of advice and support both on nutrition and fitness and set me up with the basics to keep on getting fitter and stronger! looking forward to working with him again once i'm back in Brum."
    },
    {
      images: [
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
      ],
      text: "Very professional and dedicated to my weight journey . Olu would always check up on my eating plan . Would defo train again with him and recommend to others"
    },
    {
      images: [
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
      ],
      text: "I worked with Ace temple over the past year and cannot stress enough how important that year was in achieving my fitness goals. He really helped me supercharge my results, losing around 20Kg, achieving fitness levels that I wouldn't have achieved on my own. Would recommend anyone considering hiring a PT to give him a shot. You'll be surprised."
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
