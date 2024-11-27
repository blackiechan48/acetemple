import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ServiceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

// const VideoBox = styled.div`
//   width: 100%;
//   padding: 20px;
//   margin-bottom: 20px;
//   text-align: center;

//   @media (max-width: 768px) {
//     padding: 15px;
//   }

//   @media (max-width: 600px) {
//     width: 95%;
//     padding: 10px;
//   }
// `;

// const VideoEmbed = styled.iframe`
//   width: 95%;
//   height: 400px;
//   border-radius: 6px;

//   @media (max-width: 768px) {
//     height: 300px;
//   }

//   @media (max-width: 600px) {
//     height: 200px;
//   }
// `;

const ServiceOption = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 45%;
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 90%;
    padding: 15px;
  }
`;

const Title = styled.h2`
  margin-top: 0;
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const Description = styled.p`
  margin: 15px 0;
  font-size: 1rem;
  color: #555;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const LearnMoreButton = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 20px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px 16px;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
    padding: 8px 14px;
  }
`;

const Services = () => {
  return (
    <>
      {/* <VideoBox>
        <VideoEmbed
          src="https://www.youtube.com/embed/your-video-id"
          frameBorder="0"
          allowFullScreen
          title="Service Introduction Video"
        />
      </VideoBox> */}
      <ServiceContainer>
        <ServiceOption>
          <Title>Personal Training</Title>
          <Description>
            Get personalized training programs tailored to your goals. Have your sessions meticulously planned by a
            results-driven personal trainer, ensuring every aspect of your training journey is optimized to fit your
            lifestyle.
          </Description>
          <LearnMoreButton to="/personalTraining">Learn More</LearnMoreButton>
        </ServiceOption>
        <ServiceOption>
          <Title>Online Coaching</Title>
          <Description>
            Access coaching sessions from the comfort of your home. Achieve incredible results from anywhere in the
            world with a results-driven approach.
          </Description>
          <LearnMoreButton to="/online-coaching">Learn More</LearnMoreButton>
        </ServiceOption>
      </ServiceContainer>
    </>
  );
};

export default Services;
