// src/components/30Days.js
import React, { useState } from 'react';
import styled from 'styled-components';


const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: url("/images/football.png") no-repeat center center/cover;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: rgba(0, 0, 0, 0.6); /* dark overlay for readability */
`;

const Card = styled.div`
  max-width: 600px;
  width: 100%;
  background: #ffffff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const Headline = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #222831;
  margin-bottom: 20px;
`;

const Subheadline = styled.p`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #0066ff;
    box-shadow: 0 0 4px rgba(0, 102, 255, 0.4);
  }
`;

const Button = styled.button`
  padding: 14px;
  background-color: #0066ff;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #004bcc;
  }
`;

const Message = styled.p`
  margin-top: 15px;
  font-size: 0.95rem;
  color: ${(props) =>
    props.type === 'success' ? 'green' : props.type === 'error' ? 'red' : '#333'};
`;

// Component
const ThirtyDays = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        console.error(data.error);
      }
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <Card>
          <Headline>30 Days, 30 Shifts &amp; 1 Breakthrough for Fat Loss</Headline>
          <Subheadline>
            Lose fat, build strength, and feel sexy again — without giving up carbs,
            wine, or your social life. <br />
            Daily emails straight to your inbox. Free. No fluff, just results.
          </Subheadline>

          <Form onSubmit={handleSubscribe}>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit">SUBSCRIBE NOW</Button>
          </Form>

          {status === 'loading' && <Message>Submitting...</Message>}
          {status === 'success' && (
            <Message type="success">Subscribed successfully! 🎉</Message>
          )}
          {status === 'error' && (
            <Message type="error">Subscription failed. Try again.</Message>
          )}
        </Card>
      </ContentWrapper>
    </PageContainer>
  );
};

export default ThirtyDays;
