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
  padding: 20px;
  box-sizing: border-box;
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16/9;
  margin-bottom: 20px;

  iframe {
    width: 100%;
    height: 100%;
  }
`;

const StripeButtonWrapper = styled.div`
  margin-top: 20px;
`;

const VideoWithStripeButton = () => {
  // Load the Stripe button script on component mount
  useEffect(() => {
    loadStripeButtonScript();
  }, []);

  return (
    <Section>
      {/* YouTube Video */}
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
