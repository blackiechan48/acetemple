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

// Header section
const HeaderSection = styled.section`
  background-image: url('images/ballslam.png'); /* Ensure path is correct */
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

// const HeaderTitle = styled.h1`
//   font-size: 2.5rem;
//   font-weight: bold;

//   @media (max-width: 600px) {
//     font-size: 2rem;
//   }
// `;

// Main content section with black background
const MainSection = styled.section`
  background-color: black;
  color: white;
  padding: 50px 20px;
  text-align: center;

  @media (max-width: 600px) {
    padding: 30px 15px;
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

const CenterButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 8px 16px;
  }
`;

// Points Section
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

const PointImage = styled.img`
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

const CallbackButton = styled.button`
  grid-column: span 2;
  background-color: red;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 8px 16px;
    grid-column: 1;
  }
`;

// Centered Image Section
const CenterImageSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 40px 0;
  background-color: #fff;

  @media (max-width: 600px) {
    padding: 30px 10px;
  }
`;

const CenterImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 1px;
`;

// FAQ Section
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
    { question: 'How does online coaching work?', answer: 'Our online coaching program offers customized...' },
    { question: 'What equipment will I need?', answer: 'You only need basic equipment...' },
    { question: 'How is my progress tracked?', answer: 'We track your progress through regular check-ins...' },
    { question: 'Can I cancel my subscription anytime?', answer: 'Yes, our programs are flexible...' },
    { question: 'What if I have specific dietary requirements?', answer: 'We personalize each nutrition plan...' },
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

// Text Section with button
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

const EndButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 8px 16px;
  }
`;

// Main Component
const OnlineCoaching = () => {
  const points = [
    { title: 'Coaching', description: 'My role is to simplify the journey for you by crafting a truly customized plan that is clear, easy to follow, and designed to help you see real progress every week.', image: '/images/coachingicon.webp' },
    { title: 'Nutrition Tracking', description: 'Understanding what to eat, how much to consume, and the timing of your meals can be the key to achieving your fitness goals. This year, take control of your progress and do not leave your success to chance', image: 'images/nutritionicon.png' },
    { title: 'Workout Plans', description: 'Having a structured workout plan that aligns with your fitness objectives is essential for maximizing your results. Whether you want to build strength, lose weight, or improve your overall fitness, a personalized approach ensures you stay on track.', image: 'images/workouticon.png' },
    { title: 'Habit Tracking', description: 'I prioritize you as an individual, focusing on optimizing your habits and achieving an effective balance of energy. This tailored approach is designed to maximize your results and help you reach your fitness goals efficiently', image: 'images/habiticon.png' },
    { title: 'Accountability', description: 'I am dedicated to holding you accountable on your fitness journey. By providing ongoing support and motivation, I ensure you stay on track with your goals. Together, we will celebrate your achievements and tackle challenges, helping you maintain your commitment and drive toward lasting results.', image: 'images/accountabilityicon.png' },
    { title: 'Support', description: 'Throughout your journey, you will have my unwavering support and guidance. With access to me at all times, I will be right there in your corner, coaching you every step of the way. In challenging moments, knowing you are on the right path makes all the difference. Together, we will ll ensure you stay motivated and focused on achieving your goals!', image: 'images/supporticon.png' },
  ];

  return (
    <div>
      <HeaderSection>
        {/* <HeaderTitle>Cutting Edge Online Coaching Program</HeaderTitle> */}
      </HeaderSection>
      <MainSection>
        <Subtitle>Created By Olu Olayeni</Subtitle>
        <Title>Join our Online Coaching Program</Title>
        <TextBox>
          EDo you want to <strong>drop belly fat</strong> enhace your strentgh and <strong>tone up </strong>
          so you can be in the best <strong>physical and mental</strong> form of your life?
          </TextBox>
        <CenterButton>Get Started</CenterButton>
      </MainSection>
      <PointsSection>
        {points.map((point, index) => (
          <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <PointImage src={point.image} alt={point.title} />
            <PointTitle>{point.title}</PointTitle>
            <PointText>{point.description}</PointText>
          </div>
        ))}
        <CallbackButton>Book a Callback</CallbackButton>
      </PointsSection>
      <CenterImageSection>
        <CenterImage src="/images/otbackground.png" alt="Center Image Description" />
      </CenterImageSection>
      <FAQList />
      <TextSection>
        <SectionTitle>Ready to Begin?</SectionTitle>
        <FinalTextBox>Sign up today and take the first step towards a healthier you!</FinalTextBox>
        <EndButton>Join Now</EndButton>
      </TextSection>
    </div>
  );
};

export default OnlineCoaching;
