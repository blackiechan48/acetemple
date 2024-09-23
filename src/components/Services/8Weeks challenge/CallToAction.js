import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Stripe Button Script Loader
const loadStripeButtonScript = () => {
  const script = document.createElement('script');
  script.src = 'https://js.stripe.com/v3/buy-button.js';
  script.async = true;
  document.body.appendChild(script);
};

// Sample images (adjust the paths to match your folder structure)
const images = [
  '/Image 28-12-2020 at 09.22.JPG',
  '/Image 28-12-2020 at 09.48.JPG',
  '/IMG_8645.JPG',
  '/IMG_9793.jpg',
];

const staggerAnimation = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
`;

const LeftBox = styled.div`
  width: 43%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 4em;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const StripeButtonWrapper = styled.div`
  margin-top: 20px;
`;

// Staggered Image Scroll on the right
const RightBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

const ImageScroller = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${staggerAnimation} 30s linear infinite;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 20px;
  &:nth-child(odd) {
    margin-left: 20px;
  }

  &:nth-child(even) {
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const JoinChallenge = () => {
  // Load the Stripe button script on component mount
  useEffect(() => {
    loadStripeButtonScript();
  }, []);

  return (
    <Container>
      {/* Left side: Title and Stripe button */}
      <LeftBox>
        <Title>JOIN THE 8 WEEK TRANSFORMATION CHALLENGE NOW </Title>

        {/* Stripe Button */}
        <StripeButtonWrapper>
          <stripe-buy-button
            buy-button-id="buy_btn_1Q1TwOB4rLsXvTnV64bwHgMA"
            publishable-key="pk_live_Qx8jOuqdJnFIow2oMLKLtGkl"
          ></stripe-buy-button>
        </StripeButtonWrapper>
      </LeftBox>

      {/* Right side: Staggered Image Scroll */}
      <RightBox>
        <ImageScroller>
          {images.map((imgSrc, index) => (
            <Image key={index} src={imgSrc} alt={`Image ${index + 1}`} />
          ))}
        </ImageScroller>
      </RightBox>
    </Container>
  );
};

export default JoinChallenge;
