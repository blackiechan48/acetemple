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
  font-size: 1.1em;
  text-align: center;
  margin: 10px 0;

  @media (min-width: 600px) {
    font-size: 1.3em;
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
    align-items: flex-start;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 8px;

  @media (min-width: 600px) {
    width: 45%;
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 0.85em;
  text-decoration: none;
  background-color: #222831;
  color: #F4CE14;
  border-radius: 4px;
  text-align: center;

  &:hover {
    background-color: #F05454;
  }

  @media (min-width: 900px) {
    padding: 12px 25px;
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
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
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

const RoadMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const RoadMapStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  text-align: center;

  @media (min-width: 600px) {
    width: 30%;
  }
`;

const StepNumber = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #F05454;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 0.85em;
  margin-top: 5px;
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
      <Paragraph>Achieve your fitness goals with personal training programs.</Paragraph>
      
      <Section>
        <Image src="/images/with sue.png" alt="Training" />
        <TextSection>
          <SubHeading>Why Choose Ace Temple?</SubHeading>
          <Paragraph>
            Every workout I design is customized for your unique body and goals. Personal training with me goes beyond just sessions;
            it is about creating exercises that truly fit you. I combine knowledge in fitness, nutrition, and psychology to build a plan tailored
            to your needs, focusing on a balanced, no-ego approach to health.
            <br /><br />
            Using advanced tracking tools, I monitor your progress, keeping you updated and motivated at every step of your journey.
          </Paragraph>
          <ButtonWrapper>
            <Button href="https://calendly.com/acetemple/consultation" target="_blank" rel="noopener noreferrer">
              Request a call back
            </Button>
          </ButtonWrapper>
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
        {/* <ButtonWrapper>
          <Button href="#" style={{ marginTop: '10px' }}>Watch More</Button>
        </ButtonWrapper> */}
      </VideoSection>

      <Container>
        <SubHeading>How the Service Works</SubHeading>
        <RoadMapContainer>
          <RoadMapStep>
            <StepNumber>1</StepNumber>
            <SubHeading>Consultation</SubHeading>
            <Description>
              We start with a consultation to understand your goals, current fitness level, and any specific needs you have.
            </Description>
          </RoadMapStep>

          <RoadMapStep>
            <StepNumber>2</StepNumber>
            <SubHeading>Result-Focused Training</SubHeading>
            <Description>
              Based on our consultation, we create a tailored training program nutrition plan focused on achieving measurable results.
            </Description>
          </RoadMapStep>

          <RoadMapStep>
            <StepNumber>3</StepNumber>
            <SubHeading>Personalized Meal Plan</SubHeading>
            <Description>
              To complement your training, we provide a customized meal plan to optimize your results and fuel your progress.
            </Description>
          </RoadMapStep>
          <RoadMapStep>
            <StepNumber>4</StepNumber>
            <SubHeading>Coaching</SubHeading>
            <Description>
              The reason you haven't made progress is because you haven't followed the steps you need to, 
              I will guide you through the journey and help you make consistent progress.
            </Description>
          </RoadMapStep>
        </RoadMapContainer>
      </Container>
      <ButtonWrapper>
        <Button href="https://calendly.com/acetemple/consultation" target="_blank" rel="noopener noreferrer">
          Request a call back
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default PersonalTraining;
