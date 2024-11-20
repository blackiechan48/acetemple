// src/components/OnlineCoaching.js
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Appear animation for scroll effect
const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Header section styling
const HeaderSection = styled.section`
  background-image: url('images/ballslam.png');
  background-size: cover;
  background-position: center;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    height: 400px;
    padding: 0 20px;
  }
`;

// Main content section styling
const MainSection = styled.section`
  background-color: black;
  color: white;
  padding: 50px 20px;
  text-align: center;

  @media (max-width: 600px) {
    padding: 30px 15px;
  }
`;

// Reusable Button styled component for linking to Calendly
const StyledLinkButton = styled.a`
  background-color: red;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  margin-top: 10px;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 8px 16px;
  }
`;

const Subtitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 0px;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  position: relative;
  display: inline-block;
  margin-bottom: 10px;

  &::after {
    content: '';
    display: block;
    width: 60%;
    height: 3px;
    background-color: red;
    position: absolute;
    bottom: -5px;
    left: 20%;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const TextBox = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 20px auto;

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0 10px;
  }
`;

// Points section styling
const PointsSection = styled.section`
  padding: 50px 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  background-color: #f4f4f4;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  & > div {
    background: black;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    opacity: 0;
    animation: ${appear} 0.6s ease forwards;
  }
`;

const PointImage = styled.img.attrs({ loading: 'lazy' })`
  width: 8%;
  height: auto;
  border-radius: 8px;

  @media (max-width: 600px) {
    width: 12%;
  }
`;

const PointTitle = styled.h3`
  margin-top: 15px;
  font-size: 1.5rem;
  color: white;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const PointText = styled.p`
  font-size: 1rem;
  color: white;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const CenterImageSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 40px 0;
  background-color: #fff;

  @media (max-width: 600px) {
    padding: 30px 10px;
  }
`;

const CenterImage = styled.img.attrs({ loading: 'lazy' })`
  max-width: 100%;
  height: auto;
  border-radius: 1px;
`;

const FAQSection = styled.section`
  padding: 1px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

const FAQTitle = styled.h2`
  font-size: 2rem;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const FAQSubtitle = styled.h3`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const FAQItem = styled.div`
  margin: 10px 0;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  background: #f9f9f9;
`;

const Question = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Answer = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-top: 8px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const FAQList = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    { question: 'How does online coaching work?', answer: 'Our online coaching program offers customized training and nutrition plans.' },
    { question: 'What equipment will I need?', answer: 'We design workouts based on what you have available, from basic equipment to full gyms.' },
    { question: 'How is my progress tracked?', answer: 'Through measurements, photos, and workout logs, with regular check-ins.' },
    { question: 'Can I cancel my subscription anytime?', answer: 'Yes, you can cancel anytime without penalty.' },
    { question: 'What if I have specific dietary requirements?', answer: 'We customize your meal plan to fit any dietary needs.' },
    { question: 'What if I am a beginner?', answer: 'We welcome all levels! We start at a comfortable level and build from there.' },
  ];

  return (
    <FAQSection>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      <FAQSubtitle>Get answers to your most pressing questions</FAQSubtitle>
      {faqs.map((faq, index) => (
        <FAQItem key={index} onClick={() => toggleFAQ(index)}> 
          <Question>{faq.question}</Question>
          <Answer isOpen={openFAQ === index}>{faq.answer}</Answer>
        </FAQItem>
      ))}
    </FAQSection>
  );
};

const TextSection = styled.section`
  padding: 50px 20px;
  text-align: center;

  @media (max-width: 600px) {
    padding: 30px 15px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  position: relative;
  display: inline-block;
  margin-bottom: 20px;

  &::after {
    content: '';
    display: block;
    width: 60%;
    height: 3px;
    background-color: red;
    position: absolute;
    bottom: -5px;
    left: 20%;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const FinalTextBox = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 20px auto;

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0 10px;
  }
`;

// Main Component
const OnlineCoaching = () => {
  const points = [
    { title: 'Coaching', description: 'My role is to simplify the journey for you...', image: '/images/coachingicon.webp' },
    { title: 'Nutrition Tracking', description: 'Understanding what to eat...', image: '/images/nutritionicon.png' },
    { title: 'Workout Plans', description: 'Having a structured workout plan...', image: '/images/workouticon.png' },
    { title: 'Habit Tracking', description: 'I focus on optimizing your habits and achieving effective energy balance...', image: '/images/habiticon.png' },
    { title: 'Accountability', description: 'I hold you accountable, providing ongoing support and motivation...', image: '/images/accountabilityicon.png' },
    { title: 'Support', description: 'Throughout your journey, you’ll have my full support and guidance...', image: '/images/supporticon.png' },
  ];

  return (
    <div>
      <HeaderSection>
        {/* Header Content */}
      </HeaderSection>
      <MainSection>
        <Subtitle>Created By Olu Olayeni</Subtitle>
        <Title>THE BEST COACHING SERVICE YOU WILL RECEIVE</Title>
        <TextBox>
          Do you want to <strong>drop belly fat</strong>, enhance your strength, and <strong>tone up</strong> to be in the best <strong>physical and mental</strong> shape of your life?
        </TextBox>
        <StyledLinkButton href="https://calendly.com/acetemple/consultation?month=2024-07" target="_blank" rel="noopener noreferrer">
          Get Started
        </StyledLinkButton>
      </MainSection>
      <PointsSection>
        {points.map((point, index) => (
          <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <PointImage src={point.image} alt={point.title} />
            <PointTitle>{point.title}</PointTitle>
            <PointText>{point.description}</PointText>
          </div>
        ))}
      </PointsSection>
      <CenterImageSection>
        <CenterImage src="/images/otbackground.png" alt="Center Image Description" />
      </CenterImageSection>
      <FAQList />
      <TextSection>
        <SectionTitle>Ready to Begin?</SectionTitle>
        <FinalTextBox>Sign up today and take the first step towards a healthier you!</FinalTextBox>
        <StyledLinkButton href="https://calendly.com/acetemple/consultation?month=2024-07" target="_blank" rel="noopener noreferrer">
          Get Started
        </StyledLinkButton>
      </TextSection>
    </div>
  );
};

export default OnlineCoaching;
