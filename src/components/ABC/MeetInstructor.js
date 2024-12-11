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

const Subtitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
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
          A Birmingham-based personal trainer and proud dad with a passion for
          helping people transform their lives through fitness. Since 2015, I’ve
          guided over 100 clients to achieve incredible results and sustain them
          long-term.
        </Text>
        <Text>
          I’ve experienced the ups and downs of fitness firsthand—from competing
          at peak performance to staying fit as a ‘trophy husband’ and keeping up
          with my energetic son. My mission is to help you reach your goals while
          equipping you with the tools to maintain them for life.
        </Text>
        <Text>
          Whether you’re just starting out or ready to level up, I’m here to guide
          and support you every step of the way.
        </Text>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default MeetInstructor;
