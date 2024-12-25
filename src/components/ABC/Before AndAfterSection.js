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
`;

// Component
const BeforeAfterSection = () => {
  return (
    <BeforeAfterContainer>
      <SectionTitle>Before & After Transformations</SectionTitle>
      <BeforeAfterGrid>
        {/* Transformation Card 1 */}
        <TransformationCard>
          <ImageWrapper>
            <img
              src="/images/Before and afters/Kandy.png" // Replace with actual "Before" image URL
              alt="Transformation 1"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              src="/images/Before and afters/Ali.jpg" // Replace with actual "After" image URL
              alt="Transformation 1"
            />
          </ImageWrapper>
        </TransformationCard>

        {/* Transformation Card 2 */}
        <TransformationCard>
          <ImageWrapper>
            <img
              src="/images/Before and afters/sike.jpg" // Replace with actual "Before" image URL
              alt="Transformation 2"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              src="/images/Before and afters/Rita.png" // Replace with actual "After" image URL
              alt="Transformation 2"
            />
          </ImageWrapper>
        </TransformationCard>

        {/* Transformation Card 3 */}
        <TransformationCard>
          <ImageWrapper>
            <img
              src="/images/Before and afters/Monica.png" // Replace with actual "Before" image URL
              alt="Transformation 3"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              src="/images/Before and afters/Saskia.png" // Replace with actual "After" image URL
              alt="Transformation 3"
            />
          </ImageWrapper>
        </TransformationCard>

        {/* Transformation Card 4 */}
        <TransformationCard>
          <ImageWrapper>
            <img
              src="/images/Before and afters/Tiphaine.PNG" // Replace with actual "Before" image URL
              alt="Transformation 4"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              src="/images/Before and afters/PAidab.png" // Replace with actual "After" image URL
              alt="Transformation 4"
            />
          </ImageWrapper>
        </TransformationCard>
      </BeforeAfterGrid>
    </BeforeAfterContainer>
  );
};

export default BeforeAfterSection;
