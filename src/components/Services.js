import React from 'react';
import styled from 'styled-components';

const ServiceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  flex-wrap: wrap; /* Added to wrap services on smaller screens */
`;

const VideoBox = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

const VideoEmbed = styled.iframe`
  width: 100%;
  height: 400px;
`;

const ServiceOption = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  width: 45%;
  text-align: center;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Description = styled.p`
  margin: 15px 0;
`;

const LearnMoreButton = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Services = () => {
  return (
    <>
      <VideoBox>
        {/* Replace with your actual video embed URL */}
        <VideoEmbed src="https://www.youtube.com/embed/your-video-id" frameborder="0" allowfullscreen></VideoEmbed>
      </VideoBox>
      <ServiceContainer>
        <ServiceOption>
          <Title>Personal Training</Title>
          <p>Get personalized training programs tailored to your goals.</p>
          <p>Have your sessions meticulously planned by a results-driven personal trainer, ensuring every aspect of your training journey is optimized to fit your lifestyle.</p>
          <a href="/personalTraining">
            <LearnMoreButton>Learn More</LearnMoreButton>
          </a>
        </ServiceOption>
        <ServiceOption>
          <Title>Online Coaching</Title>
          <p>Access coaching sessions from the comfort of your home.</p>
          <p>Achieve incredible results from anywhere in the world. A results-driven approach creates a challenging and efficient workout and lifestyle plan, offering the same, if not greater, accountability as in-person personal training.</p>
          <a href="/online-coaching">
            <LearnMoreButton>Learn More</LearnMoreButton>
          </a>
        </ServiceOption>
      </ServiceContainer>
    </>
  );
};

export default Services;
