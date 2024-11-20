import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #DDDDDD; // Grey background
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #F4CE14; // Yellow title
  margin-bottom: 10px;
`;

const Message = styled.p`
  font-size: 1.2em;
  color: #222831; // Black text
  max-width: 600px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 15px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 100%;
  max-width: 400px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 10px;
  color: white;
  background-color: #F05454; // Red button
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #d94343;
  }
`;

const SuccessMessage = styled.p`
  font-size: 1.1em;
  color: green;
  margin-top: 15px;
`;

const ChallengeClosedPage = () => {
  const [formData, setFormData] = useState({ firstName: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    // Add logic here to send email to backend or an email list manager like Mailchimp
    setFormData({ firstName: "", email: "" });
    setIsSubmitted(true);
  };

  return (
    <Container>
      <Title>Body Transformation Challenge Closed</Title>
      <Message>
        <strong>The Body Transformation Challenge</strong> is currently closed. Enter your first name and email below to be the first to know when the next challenge opens and receive an <strong>early bird discount!</strong>
      </Message>
      <form onSubmit={handleEmailSubmit}>
        <Input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Notify Me</SubmitButton>
      </form>
      {isSubmitted && (
        <SuccessMessage>
          Thank you, {formData.firstName}! You’ll be notified about the next challenge and early bird discounts.
        </SuccessMessage>
      )}
    </Container>
  );
};

export default ChallengeClosedPage;
