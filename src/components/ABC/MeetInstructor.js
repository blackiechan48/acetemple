import React from 'react';
import styled from 'styled-components';

// Styled Components
const SectionContainer = styled.div`
  background-color: #222831;
  color: white;
  padding: 40px 20px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 20px 0;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;



const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const MeetInstructor = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <Title>Meet Your Coach: Olu Olayeni</Title>
        <Image src="images/about/91459155_583390222269401_3230648346903157205_n.jpg" alt="Olu Olayeni" />
        <Text>
        A Birmingham-based personal trainer and proud dad, I’ve dedicated my career to 
        helping people transform their lives through fitness. Since 2015, I’ve guided 
        over 100 clients to stronger bodies, healthier habits, and lasting confidence.

        </Text>
        <Text>I know the journey firsthand—whether it’s competing at peak performance 
          levels or staying active as a ‘trophy husband’ and busy father. My mission: 
          to help you crush your goals and maintain the results for a lifetime.
     
        </Text>
        <Text>
        No matter where you’re starting from, I’m here to guide and support you 
        every step of the way.
        </Text>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default MeetInstructor;
