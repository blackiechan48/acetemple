import React from 'react';
import styled from 'styled-components';

// Styled Components
const BeforeAfterContainer = styled.div`
  background-color: #dddddd; /* Grey */
  padding: 40px 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #222831; /* Black */

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BeforeAfterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 20px auto;
  max-width: 800px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TransformationCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  &::before {
    content: attr(data-label);
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #f05454; /* Red */
    color: white;
    padding: 5px 10px;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px;

    @media (max-width: 768px) {
      font-size: 0.8rem;
      top: 5px;
      left: 5px;
    }
  }
`;

const Caption = styled.div`
  padding: 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #222831; /* Black */

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Component
const BeforeAfterSection = () => {
  return (
    <BeforeAfterContainer>
      <SectionTitle>Before & After Transformations</SectionTitle>
      <BeforeAfterGrid>
        {/* Transformation Card 1 */}
        <TransformationCard>
          <ImageWrapper data-label="Before">
            <img
              src="https://via.placeholder.com/300x400" // Replace with actual "Before" image URL
              alt="Before Transformation"
            />
          </ImageWrapper>
          <ImageWrapper data-label="After">
            <img
              src="https://via.placeholder.com/300x400" // Replace with actual "After" image URL
              alt="After Transformation"
            />
          </ImageWrapper>
          <Caption>John's 8-Week Transformation</Caption>
        </TransformationCard>

        {/* Transformation Card 2 */}
        <TransformationCard>
          <ImageWrapper data-label="Before">
            <img
              src="/IMG_9793.jpg" // Replace with actual "Before" image URL
              alt="Before Transformation"
            />
          </ImageWrapper>
          <ImageWrapper data-label="After">
            <img
              src="/IMG_8645.JPG" // Replace with actual "After" image URL
              alt="After Transformation"
            />
          </ImageWrapper>
          <Caption>Sarah's 8-Week Transformation</Caption>
        </TransformationCard>
        {/* Transformation Card 2 */}
        <TransformationCard>
          <ImageWrapper data-label="Before">
            <img
              src="/IMG_9793.jpg" // Replace with actual "Before" image URL
              alt="Before Transformation"
            />
          </ImageWrapper>
          <ImageWrapper data-label="After">
            <img
              src="/IMG_8645.JPG" // Replace with actual "After" image URL
              alt="After Transformation"
            />
          </ImageWrapper>
          <Caption>Sarah's 8-Week Transformation</Caption>
        </TransformationCard>
        {/* Transformation Card 2 */}
        <TransformationCard>
          <ImageWrapper data-label="Before">
            <img
              src="/IMG_9793.jpg" // Replace with actual "Before" image URL
              alt="Before Transformation"
            />
          </ImageWrapper>
          <ImageWrapper data-label="After">
            <img
              src="/IMG_8645.JPG" // Replace with actual "After" image URL
              alt="After Transformation"
            />
          </ImageWrapper>
          <Caption>Sarah's 8-Week Transformation</Caption>
        </TransformationCard>

        {/* Add more cards as needed */}
      </BeforeAfterGrid>
    </BeforeAfterContainer>
  );
};

export default BeforeAfterSection;
