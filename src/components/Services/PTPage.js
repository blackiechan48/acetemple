import React from 'react';
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

const SubHeading = styled.h2`
  font-size: 1.2em;
  text-align: center;
  margin: 10px 0;

  @media (min-width: 600px) {
    font-size: 1.4em;
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
  margin: 10px auto;
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }

  @media (min-width: 900px) {
    padding: 10px 20px;
    font-size: 0.9em;
  }
`;

const VideoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
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
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 30%;
  }

  iframe {
    width: 100%;
    height: 200px;

    @media (min-width: 600px) {
      height: 240px;
    }
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
  border-radius: 8px;

  @media (min-width: 600px) {
    width: 30%;
  }
`;

const PersonalTraining = () => {
  const videoLinks = [
    "https://www.youtube.com/embed/JtaXCa4ycV4",
    "https://www.youtube.com/embed/BkEPYL8iY_Q",
    "https://www.youtube.com/embed/zhkdIqgdQH0"
  ];

  return (
    <Container>
      <Heading>Personal Training</Heading>
      <Paragraph>Achieve your fitness goals with our personal training programs.</Paragraph>
      
      <Section>
        <Image src="/images/withkaren.png" alt="Training" />
        <TextSection>
          <SubHeading>Why Choose Ace Temple?</SubHeading>
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

      <SubHeading>What People Like You Say</SubHeading>
      <VideoSection>
        <VideoBox>
          {videoLinks.map((link, index) => (
            <VideoContainer key={index}>
              <iframe 
                src={link} 
                title={`Testimonial Video ${index + 1}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
              ></iframe>
            </VideoContainer>
          ))}
        </VideoBox>
        <Button href="#" style={{ marginTop: '10px' }}>Watch More</Button>
      </VideoSection>

      <SubHeading>Our Services</SubHeading>
      <BoxContainer>
        <Box>
          <SubHeading>Consultation</SubHeading>
        </Box>
        <Box>
          <SubHeading>Result Focused Training</SubHeading>
        </Box>
        <Box>
          <SubHeading>Personalized Meal Plan</SubHeading>
        </Box>
      </BoxContainer>
    </Container>
  );
};

export default PersonalTraining;
