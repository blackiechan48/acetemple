import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  max-width: 100%;
`;

const Heading = styled.h1`
  font-size: 1.3em;
  text-align: center;
  margin-bottom: 10px;

  @media (min-width: 600px) {
    font-size: 1.5em;
  }
`;

const Paragraph = styled.p`
  font-size: 0.85em;
  text-align: center;
  margin-bottom: 10px;

  @media (min-width: 600px) {
    font-size: 0.9em;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;

  @media (min-width: 600px) {
    width: 50%;
    margin-right: 15px;
    margin-bottom: 0;
  }
`;

const TextSection = styled.div`
  width: 100%;
  padding: 0 10px;

  @media (min-width: 600px) {
    width: 50%;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 8px 15px;
  font-size: 0.85em;
  margin: 10px auto; /* Centers the button horizontally */
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }

  @media (min-width: 900px) {
    padding: 10px 20px;
    font-size: 0.9em;
  }
`;

const VideoSection = styled.div`
  margin-bottom: 15px;
`;

const VideoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 30%;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Box = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #f0f0f0;
  text-align: center;

  @media (min-width: 600px) {
    width: 30%;
  }
`;

const PersonalTraining = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const handleVideoClick = (index) => {
    setPlayingVideo(index);
  };

  return (
    <Container>
      <Heading>Personal Training</Heading>
      <Paragraph>Achieve your fitness goals with our personal training programs.</Paragraph>
      
      <Section>
        <Image src="https://via.placeholder.com/300" alt="Training" />
        <TextSection>
          <Heading>Why Choose Ace Temple?</Heading>
          <Paragraph>
            At the core, every exercise prescribed is tailored to your unique anatomy. 
            We believe personal training transcends mere one-on-one sessions; 
            it's about crafting and implementing exercises that resonate uniquely with you. 
            Our approach blends physics, physiology, psychology, and nutrition science to 
            meticulously design the optimal workout regimen customized for your needs. 
            We uphold an unbiased, ego-free philosophy towards exercise and nutrition. 
            Our transparent, knowledgeable, and seasoned methods yield rapid, 
            tangible improvements across all aspects of your health. 
            Utilizing cutting-edge analytics technology, we monitor every metric of 
            your progress, ensuring you stay informed about your transformational 
            journey at every turn.
          </Paragraph>
          <Button href="https://calendly.com/acetemple/consultation" target="_blank" rel="noopener noreferrer">
            Request a call back
          </Button>
        </TextSection>
      </Section>

      <Heading>What People Like You Say</Heading>
      <VideoSection>
        <VideoBox>
          {[1, 2, 3].map((video, index) => (
            <VideoContainer key={index} onClick={() => handleVideoClick(index)}>
              {playingVideo === index ? (
                <video width="100%" controls>
                  <source src={`https://via.placeholder.com/300?text=Video+${index + 1}`} type="video/mp4" />
                </video>
              ) : (
                <span>Testimonial {index + 1}</span>
              )}
            </VideoContainer>
          ))}
        </VideoBox>
        <Button href="#">Watch More</Button>
      </VideoSection>

      <Heading>Our Services</Heading>
      <BoxContainer>
        <Box>
          <Heading>Consultation</Heading>
        </Box>
        <Box>
          <Heading>Result Focused Training</Heading>
        </Box>
        <Box>
          <Heading>Personalized Meal Plan</Heading>
        </Box>
      </BoxContainer>
    </Container>
  );
};

export default PersonalTraining;
