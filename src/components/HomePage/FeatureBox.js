import React from 'react';
import styled from 'styled-components';

const FeatureBoxesContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureBox = styled.div`
  height: auto;
  background-color: #f0f0f0;
  padding: 1rem;
  text-align: center;
  width: 30%;
  border-radius: 8px;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 300px;
    height: 300px;
    border-radius: 8px;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
    }
  }

  a {
    text-decoration: none;
    color: #000;
    margin-top: auto;
  }

  button {
    background-color: black;
    color: yellow;
    border: none;
    padding: 0.5rem 2rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 1rem;
  }
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: red;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SubHeading = styled.p`
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: black;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FeatureBoxes = () => {
  return (
    <>
      <Heading>Whatever your goals, let's achieve it together</Heading>
      <SubHeading>You don't have to be fit to start, but if you start, you will be fit.</SubHeading>
      <SubHeading>Whether you're aiming for a body transformation or just improved health, I know how to make it happen.</SubHeading>
      <FeatureBoxesContainer>
        <FeatureBox>
          <img src="/images/pt.png" alt="Personal Training" />
          <h3>Personal Training</h3>
          <p>Get personalized training programs tailored to your goals.</p>
          <p>Have sessions meticulously planned by a results-driven trainer. The journey will be challenging but enjoyable.</p>
          <a href="/personalTraining">
            <button>Learn More</button>
          </a>
        </FeatureBox>
        <FeatureBox>
          <img src="/images/coaching.png" alt="Online Coaching" />
          <h3>Online Coaching</h3>
          <p>Access coaching sessions from the comfort of your home.</p>
          <p>Achieve incredible results from anywhere with a personalized plan and accountability.</p>
          <a href="/online-coaching">
            <button>Learn More</button>
          </a>
        </FeatureBox>
        <FeatureBox>
          <img src="/images/acebody.png" alt="Challenges" />
          <h3>Challenges</h3>
          <p>Join our fitness challenges and push your limits.</p>
          <p>Work alongside like-minded individuals in a supportive community to reach your fitness goals.</p>
          <a href="/2mo">
            <button>Learn More</button>
          </a>
        </FeatureBox>
      </FeatureBoxesContainer>
    </>
  );
};

export default FeatureBoxes;
