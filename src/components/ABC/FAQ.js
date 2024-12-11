import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const FAQContainer = styled.div`
  background-color: #dddddd; /* Grey */
  color: #222831; /* Black */
  padding: 40px 20px;
  border-radius: 10px;
  margin: 20px auto;
  max-width: 800px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const FAQTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
`;

const QuestionContainer = styled.div`
  margin-bottom: 15px;
  border-bottom: 1px solid #f05454; /* Red */
  padding-bottom: 10px;
`;

const QuestionButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: #222831;
  cursor: pointer;
  padding: 10px 0;

  &:hover {
    color: #f05454; /* Red */
  }
`;

const Answer = styled.p`
  font-size: 1rem;
  color: #444;
  margin-top: 10px;
  padding-left: 10px;
`;

const PlusIcon = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const MinusIcon = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

// Component
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why can’t I just follow free YouTube videos or fitness apps?",
      answer:
        "While YouTube and apps offer great resources, they don’t provide personalized plans, accountability, or expert feedback. This challenge is tailored to your unique needs and goals, ensuring faster, sustainable results with guidance every step of the way.",
    },
    {
      question: "Do I need access to a gym?",
      answer:
        "Not at all! Workouts are designed to be flexible, with options for both home and gym settings. Whether you have equipment or just a small space, we’ll make it work for you.",
    },
    {
      question: "What if I’m a beginner?",
      answer:
        "This challenge is perfect for beginners! Every plan is scalable to your fitness level, and you’ll get all the guidance you need to start strong and build confidence.",
    },
    {
      question: "How much time will I need each week?",
      answer:
        "You’ll need 3-5 days for workouts, with sessions ranging from 30-60 minutes. Nutrition guidance and accountability are built into your routine, so it’s easy to fit into your schedule.",
    },
    {
      question: "What happens after the 8 weeks?",
      answer:
        "By the end of the challenge, you’ll have the knowledge, habits, and confidence to maintain your results. You’ll also have the option to continue with ongoing coaching if you’d like additional support.",
    },
  ];

  return (
    <FAQContainer>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      {faqs.map((faq, index) => (
        <QuestionContainer key={index}>
          <QuestionButton onClick={() => toggleAnswer(index)}>
            {faq.question}
            {activeIndex === index ? (
              <MinusIcon>-</MinusIcon>
            ) : (
              <PlusIcon>+</PlusIcon>
            )}
          </QuestionButton>
          {activeIndex === index && <Answer>{faq.answer}</Answer>}
        </QuestionContainer>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
