import React, { useState } from 'react';
import styled from 'styled-components';

const LeadFormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const LeadGeneration = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your Mailchimp integration logic here
    console.log(`Submitted: Name - ${name}, Email - ${email}`);
    // Clear form fields after submission
    setEmail('');
    setName('');
  };

  return (
    <LeadFormContainer>
      <h2>5 key fatloss factors</h2>
      <p>Download the 5 key fatloss you need to know about 
      to get the fatloss ball rolling  today.</p>
      <img src="/logo192.png" alt="Ebook Cover" />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <SubmitButton type="submit">Download your copy
        </SubmitButton>
      </Form>
    </LeadFormContainer>
  );
};
export default LeadGeneration;
