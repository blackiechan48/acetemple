import React from 'react';
import styled from 'styled-components';

const FeatureBoxesContainer = styled.div`
background-color: black;
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
  padding: 1rem;
`;

const FeatureBox = styled.div`
  height 100px;
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
  }

  a {
    text-decoration: none;
    color: #000;
    margin-top: auto; /* Pushes the button to the bottom */
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
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: red;
`;

const FeatureBoxes = () => {
  return (
    <>
      <Heading>Whatever your goals, let's achieve it together</Heading>
      <p>You don't have to be fit to start, but if you start you will be fit.</p>
      <p>Whether you have had enough of not feeling confident and you want to achieve a jaw-dropping body transformation or you are just looking to
         improve your health and fitness so you can lay the foundation for a better quality of life, I know how to make it happen and your wish is
          my mission.</p>
      <FeatureBoxesContainer>
        <FeatureBox>
          <img src="/images/pt.png" alt="Personal Training" />
          <h3>Personal Training</h3>
          <p>Get personalized training programs tailored to your goals.</p>
          <p> Have your sessions meticulously planned by a results-driven personal trainer, ensuring every aspect of your training journey
             is optimized to fit your lifestyle. While the journey may be challenging, it will also be enjoyable, and you won't regret your 
             commitment</p>
          <a href="/personalTraining">
            <button>Learn More</button>
          </a>
        </FeatureBox>
        <FeatureBox>
          <img src="/images/coaching.png" alt="Online Coaching" />
          <h3>Online Coaching</h3>
          <p>Access coaching sessions from the comfort of your home.</p>
          <p> Achieve incredible results from anywhere in the world. A results-driven approach creates a challenging and efficient workout and lifestyle plan,
             offering the same, if not greater, accountability as in-person personal training</p>
          <a href="/online-coaching">
            <button>Learn More</button>
          </a>
        </FeatureBox>
        <FeatureBox>
          <img src="/images/acebody.png" alt="Challenges" />
          <h3>Challenges</h3>
          <p>Join our fitness challenges and push your limits.</p>
          <p> Join online challenges alongside like-minded individuals who share the same goal of body transformation. 
            Participate in a supportive community where everyone is motivated to achieve their fitness goals together, 
            fostering a sense of camaraderie and accountability as you work towards transforming your body</p>
          <a href="/online-challenges">
            <button>Learn More</button>
          </a>
        </FeatureBox>
      </FeatureBoxesContainer>
    </>
  );
};

export default FeatureBoxes;
