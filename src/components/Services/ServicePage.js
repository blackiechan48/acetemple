import React from 'react';
import styled from 'styled-components';

const ServiceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const VideoBox = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const VideoEmbed = styled.iframe`
  width: 100%;
  height: 400px;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const ServiceOption = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  width: 45%;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

const Title = styled.h2`
  margin-top: 0;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Description = styled.p`
  margin: 15px 0;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const LearnMoreButton = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const Services = () => {
  return (
    <>
      <VideoBox>
        <VideoEmbed 
          src="https://www.youtube.com/embed/your-video-id" 
          frameBorder="0" 
          allowFullScreen 
        />
      </VideoBox>
      <ServiceContainer>
        <ServiceOption>
          <Title>Personal Training</Title>
          <Description>
            Get personalized training programs tailored to your goals. 
            Have your sessions meticulously planned by a results-driven personal trainer, ensuring every aspect of your training journey is optimized to fit your lifestyle.
          </Description>
          <a href="/personalTraining">
            <LearnMoreButton>Learn More</LearnMoreButton>
          </a>
        </ServiceOption>
        <ServiceOption>
          <Title>Online Coaching</Title>
          <Description>
            Access coaching sessions from the comfort of your home. Achieve incredible results from anywhere in the world with a results-driven approach.
          </Description>
          <a href="/OnlineCoaching">
            <LearnMoreButton>Learn More</LearnMoreButton>
          </a>
        </ServiceOption>
      </ServiceContainer>
    </>
  );
};

export default Services;
