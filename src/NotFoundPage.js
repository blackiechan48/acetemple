import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Changed from height to min-height to avoid extra space */
  background-color: #f8f9fa;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #343a40;
  margin: 10px 0; /* Reduce margins to minimize dead space */

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: #6c757d;
  margin: 10px 0; /* Reduce margins */

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const FunImage = styled.img`
  width: 250px; /* Slightly smaller for mobile */
  margin: 20px 0;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 200px;
    margin: 15px 0; /* Reduce margins */
  }

  @media (max-width: 480px) {
    width: 180px;
    margin: 10px 0; /* Reduce margins further */
  }
`;

const BackButton = styled.button`
  margin-top: 15px; /* Reduce top margin */
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
`;

const NotFoundPage = () => {
  const handleGoBack = () => {
    window.history.back(); // Navigate back to the previous page
  };

  return (
    <Container>
      <Title>404</Title>
      <Message>Whoops! This page skipped leg day and can’t support your request.</Message>
      {/* Add a fun image */}
      <FunImage
        src="/images/not found 404/lost.jpg"
        alt="Funny 404 Illustration"
      />
      <BackButton onClick={handleGoBack}>Go Back</BackButton>
    </Container>
  );
};

export default NotFoundPage;
