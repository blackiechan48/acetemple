// Offer.jsx
import React from 'react';
import styled from 'styled-components';

// Styled Components
const OfferContainer = styled.div`
  background-color: #dddddd;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h2`
  color: #222831;
  font-size: 2rem;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const BoxesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Box = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
  border-radius: 50%;
`;

const BoxTitle = styled.h3`
  color: #222831;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const BoxText = styled.p`
  color: #6c757d;
  font-size: 1rem;
`;

// Component
const Offer = () => {
  return (
    <OfferContainer>
      <Title>Why This Challenge Will Works for You!</Title>
      <BoxesWrapper>
        <Box>
          <Image src="/Image 28-12-2020 at 09.22.JPG" alt="Expert Workouts" />
          <BoxTitle>Workouts Tailored to You, Not the Masses</BoxTitle>
          <BoxText>Your body, your goals, your plan. Forget cookie-cutter workouts. 
            Every session is personalized to match your fitness level and progress, 
            ensuring you get the best results efficiently and safely.</BoxText>
        </Box>
        <Box>
          <Image src="/Image 28-12-2020 at 09.22.JPG" alt="Progress Tracking" />
          <BoxTitle>Nutrition Made Simple and Sustainable</BoxTitle>
          <BoxText>Eat for results without giving up the foods you love. With customized 
            calorie and macronutrient targets, flexible meal plans, and delicious recipes, 
            you’ll learn how to fuel your body for fat loss and strength without feeling 
            deprived.</BoxText>
        </Box>
        <Box>
          <Image src="/path/to/image3.jpg" alt="Community Support" />
          <BoxTitle>Learn Skills You’ll Keep for Life</BoxTitle>
          <BoxText>This isn’t a quick fix—it’s an education. From understanding workouts to 
            mastering nutrition, this challenge equips you with tools to sustain your progress
             long after the 8 weeks are over.</BoxText>
        </Box>
        <Box>
          <Image src="/path/to/image4.jpg" alt="Rewards System" />
          <BoxTitle>Motivation from a Like-Minded Community</BoxTitle>
          <BoxText>Never feel alone on your journey. Stay inspired and 
            accountable with group activities, friendly competitions, and a 
            supportive environment that celebrates every win.</BoxText>
        </Box>
        <Box>
          <Image src="/path/to/image4.jpg" alt="Rewards System" />
          <BoxTitle>Stay on Track with Expert Guidance</BoxTitle>
          <BoxText>We’re in this together. With regular catch ups, 
            progress tracking, and tailored feedback, you’ll always 
            know exactly where you stand and what to adjust for maximum results.</BoxText>
        </Box>
      </BoxesWrapper>
    </OfferContainer>
  );
};

export default Offer;
