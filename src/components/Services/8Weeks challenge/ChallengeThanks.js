import React from 'react';
import styled from 'styled-components';

// Styled Components
const PageContainer = styled.div`
  background: #ffffff; /* White */
  color: #222831; /* Black */
  padding: 40px 20px;
  text-align: center;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Headline = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #f05454; /* Red */

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subheadline = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: 400;
  color: #555555;
`;

const Note = styled.p`
  font-size: 1rem;
  margin-top: 20px;
  color: #777777;
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 15px 30px;
  background-color: #f4ce14; /* Yellow */
  color: #222831; /* Black */
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddb013; /* Slightly darker yellow */
  }
`;

// Component
const ChallengeThanks = () => {
  return (
    <PageContainer>
      <Headline>Thank You for Registering!</Headline>
      <Subheadline>
        Your entry for the Ace Body Challenge giveaway has been received!
      </Subheadline>
      <Note>
        Winners will be announced on December 24th—keep an eye on your inbox for updates!
      </Note>
      <Button href="/">Return to Homepage</Button>
    </PageContainer>
  );
};

export default ChallengeThanks;
