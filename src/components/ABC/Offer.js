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
      <Title>Why This Challenge Will Work for You!</Title>
      <BoxesWrapper>
        <Box>
          <Image src="/images/workouticon.png" alt="Expert Workouts" />
          <BoxTitle>Sculpt a Stronger, Healthier Body w</BoxTitle>
          <BoxText>Personalised workouts designed for your goals and 
            fitness level—no cookie-cutter routines..</BoxText>
        </Box>
        <Box>
          <Image src="/images/nutritionicon.png" alt="Progress Tracking" />
          <BoxTitle>Enjoy Delicious, Simple Meals </BoxTitle>
          <BoxText>Fuel your progress with flexible meal plans and tasty recipes—no 
            confusing diets or deprivation.</BoxText>
        </Box>
        <Box>
          <Image src="/images/supporticon.png" alt="Community Support" />
          <BoxTitle>Build Lasting Healthy Habits </BoxTitle>
          <BoxText>Learn essential fitness and nutrition skills to keep making great 
             choices long after the 8 weeks end.</BoxText>
        </Box>
        <Box>
          <Image src="/images/reward.webp" alt="Rewards System" />
          <BoxTitle>Thrive in a Supportive Community</BoxTitle>
          <BoxText>Stay motivated and accountable with like-minded participants
             who celebrate every success.</BoxText>
        </Box>
        <Box>
          <Image src="/images/guidance.png" alt="Rewards System" />
          <BoxTitle>Progress with Expert Guidance
          </BoxTitle>
          <BoxText>Regular check-ins, tailored feedback, and clear next steps ensure
             you always know how to move forward.</BoxText>
        </Box>
      </BoxesWrapper>
    </OfferContainer>
  );
};

export default Offer;
