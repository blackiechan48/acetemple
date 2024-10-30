import React, { useEffect } from 'react';
import styled from 'styled-components';

// Stripe Button Script Loader
const loadStripeButtonScript = () => {
  if (!document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]')) {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    script.onload = () => {
      if (window.Stripe) {
        const stripe = window.Stripe('pk_live_Qx8jOuqdJnFIow2oMLKLtGkl');
        stripe.mount(document.querySelector('stripe-buy-button'));
      }
    };
    document.body.appendChild(script);
  }
};

// Styled Components
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 100%;
  aspect-ratio: 16/9;
  margin-bottom: 10px;

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

const StripeButtonWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 20px;

  stripe-buy-button {
    width: 100%;
    max-width: 300px;
  }

  @media (min-width: 768px) {
    margin-top: 2px;
    padding: 0;
  }
`;

const VideoWithStripeButton = () => {
  // Load the Stripe button script on component mount
  useEffect(() => {
    loadStripeButtonScript();
  }, []);

  return (
    <Section>
      {/* Paida Testimonial Video */}
      <VideoContainer>
        <iframe
          src="https://www.youtube.com/embed/1ew-winZcks"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>

      {/* Stripe Button */}
      <StripeButtonWrapper>
        <stripe-buy-button
          buy-button-id="buy_btn_1Q1TwOB4rLsXvTnV64bwHgMA"
          publishable-key="pk_live_Qx8jOuqdJnFIow2oMLKLtGkl"
        ></stripe-buy-button>
      </StripeButtonWrapper>
    </Section>
  );
};

export default VideoWithStripeButton;
