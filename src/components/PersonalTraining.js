import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1em;
  text-align: center;
  margin-bottom: 20px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  margin-right: 20px;
`;

const TextSection = styled.div`
  width: 50%;
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1em;
  margin-top: 10px;
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const VideoSection = styled.div`
  margin-bottom: 20px;
`;

const VideoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const VideoContainer = styled.div`
  width: 30%;
  height: 200px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 10px;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Box = styled.div`
  width: 30%;
  padding: 20px;
  background-color: #f0f0f0;
  text-align: center;
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
            At the core, every exercise prescribed is tailored to your unique anatomy. We believe personal training transcends mere one-on-one sessions; it's about crafting and implementing exercises that resonate uniquely with you. Our approach blends physics, physiology, psychology, and nutrition science to meticulously design the optimal workout regimen customized for your needs. We uphold an unbiased, ego-free philosophy towards exercise and nutrition. Our transparent, knowledgeable, and seasoned methods yield rapid, tangible improvements across all aspects of your health. Utilizing cutting-edge analytics technology, we monitor every metric of your progress, ensuring you stay informed about your transformational journey at every turn. Once you experience this intelligent, data-driven approach rooted in science, your perception of personal training will be forever changed.
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
                <span>Video {index + 1}</span>
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
