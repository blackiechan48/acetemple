import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 110vh;
  background: url(/RPReplay_Final1726921791.MP4) no-repeat center center;
  background-size: center;
  background-color:black;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column; 
    justify-content: flex-start;
  }
`;

const TextBox = styled.div`
  position: absolute;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  width: 300px;

  @media (max-width: 768px) {
    width: 90%; 
    position: relative;
    margin-bottom: 20px;
    padding: 15px;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Subtext = styled.ul`
  font-size: 1rem;
  line-height: 1.1;
  padding-left: 0; 

  li {
    margin-bottom: 8px;
    list-style: none; 
    position: relative;
    padding-left: 1.5em; 

    &::before {
      content: '★';  
      position: absolute;
      left: 0;
      top: 0;
      color: #FFD700;  
      font-size: 1.2em;  
    }
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Positions for the text boxes
const TopLeft = styled(TextBox)`
  top: 10%;
  left: 10%;

  @media (max-width: 768px) {
    top: auto;
    left: auto;
  }
`;

const BottomLeft = styled(TextBox)`
  bottom: 10%;
  left: 10%;

  @media (max-width: 768px) {
    bottom: auto;
    left: auto;
  }
`;

const TopRight = styled(TextBox)`
  top: 10%;
  right: 10%;

  @media (max-width: 768px) {
    top: auto;
    right: auto;
  }
`;

const BottomRight = styled(TextBox)`
  bottom: 10%;
  right: 10%;

  @media (max-width: 768px) {
    bottom: auto;
    right: auto;
  }
`;

const PersonalisedSection = () => {
  return (
    <SectionContainer>
      {/* Top Left: Personalised Targets */}
      <TopLeft>
        <Title>Personalised Targets</Title>
        <Subtext>
          <li>Know what you need to do to get your fat loss goal without second guessing.</li>
          <li>Have your weight, steps, calories, etc. goals tailored to you.</li>
        </Subtext>
      </TopLeft>

      {/* Bottom Left: Tailored Workout and Diet Plan */}
      <BottomLeft>
        <Title>Tailored Workout and Diet Plan to Fit Your Lifestyle</Title>
        <Subtext>
          <li>No more wondering what to do at the gym.</li>
          <li>Have your meal plans fit into your lifestyle and routine.</li>
        </Subtext>
      </BottomLeft>

      {/* Top Right: Delicious Low-Calorie Meals */}
      <TopRight>
        <Title>Delicious Low-Calorie Meals</Title>
        <Subtext>
          <li>Stick to your diet without feeling deprived.</li>
          <li>Take the guesswork out with meals tailored to your goal.</li>
        </Subtext>
      </TopRight>

      {/* Bottom Right: Track Your Goals Easily */}
      <BottomRight>
        <Title>Track Your Goals Easily</Title>
        <Subtext>
          <li>Track your progress on a mobile app to stay motivated.</li>
          <li>Get regular feedback and plan updates.</li>
        </Subtext>
      </BottomRight>
    </SectionContainer>
  );
};

export default PersonalisedSection;
