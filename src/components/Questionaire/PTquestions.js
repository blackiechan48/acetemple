import React, { useState } from 'react';
import styled from 'styled-components';

const questions = [
  "What's your long-term fitness goal?",
  "Are you able to commit to a 6-month training program?",
  "What are you interested in: personal training or online coaching?",
  "Do you have any previous experience with fitness training?",
  "What is your current fitness level?",
  "Are there any specific dietary restrictions or preferences we should know about?",
  "How many days per week are you willing to commit to training sessions?",
  "What times of day are you available for training sessions?",
  "Are there any injuries or medical conditions we should be aware of?",
  "How did you hear about our training services?"
];

const FormComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState({});
  const totalQuestions = questions.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data and send email (you would typically use an API or server-side logic for this)
    console.log("Form data:", formData);
    // Redirect to a different page (you can use react-router-dom for routing)
    // Example:
    // history.push('/thank-you');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Submit the form if on the last question
      handleSubmit();
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Question>{questions[currentQuestion]}</Question>
        <InputField
          type="text"
          name={`question${currentQuestion + 1}`} // Example naming for form fields
          onChange={handleInputChange}
          required
        />
        <Button type="button" onClick={handleNext}>
          {currentQuestion < totalQuestions - 1 ? 'Next' : 'Submit'}
        </Button>
      </form>
      <ProgressBar>
        Progress: {((currentQuestion + 1) / totalQuestions) * 100}%
      </ProgressBar>
    </FormContainer>
  );
};

export default FormComponent;

// Styled Components
const FormContainer = styled.div`
  width: 80%;
  margin: auto;
  padding: 20px;
`;

const Question = styled.h3`
  margin-bottom: 10px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const ProgressBar = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  height: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
