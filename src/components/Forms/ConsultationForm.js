// src/components/ConsultationForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const FormSubtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 1rem;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

const RadioLabel = styled.label`
  font-size: 1rem;
  color: #333;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 1.2rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    obstacles: '',
    isReady: 'yes',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the backend
      await fetch('http://localhost:5002/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Redirect to Calendly after submission
      window.location.href = 'https://calendly.com/acetemple/consultation?month=2024-07';
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormTitle>Get started Form </FormTitle>
        <FormSubtitle>Please fill out this form to share a bit about yourself. Once submitted, you'll be able to choose a time for us to connect on a call.</FormSubtitle>
        
        <Label htmlFor="name">Name *</Label>
        <Input 
          type="text" 
          name="name" 
          id="name"
          required 
          value={formData.name} 
          onChange={handleChange} 
        />
        
        <Label htmlFor="email">Email *</Label>
        <Input 
          type="email" 
          name="email" 
          id="email"
          required 
          value={formData.email} 
          onChange={handleChange} 
        />
        
      
        
        <Label htmlFor="goal">If we were to work together, what would your 6-month goal be? *</Label>
        <Textarea 
          name="goal" 
          id="goal"
          required 
          value={formData.goal} 
          onChange={handleChange} 
        />
        
        <Label htmlFor="obstacles">What are the obstacles stopping you from achieving these goals? *</Label>
        <Textarea 
          name="obstacles" 
          id="obstacles"
          required 
          value={formData.obstacles} 
          onChange={handleChange} 
        />
        
        <Label>Are you ready to make this goal a priority? *</Label>
        <RadioGroup>
          <RadioLabel>
            <input 
              type="radio" 
              name="isReady" 
              value="yes" 
              checked={formData.isReady === 'yes'} 
              onChange={handleChange} 
            />
            Yes
          </RadioLabel>
          <RadioLabel>
            <input 
              type="radio" 
              name="isReady" 
              value="no" 
              checked={formData.isReady === 'no'} 
              onChange={handleChange} 
            />
            No
          </RadioLabel>
        </RadioGroup>
        
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default ConsultationForm;
