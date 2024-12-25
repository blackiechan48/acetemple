import React from 'react';
import styled from 'styled-components';

// Styled Components
const VideoSectionContainer = styled.div`
  background-color: #dddddd; /* Grey */
  color: #222831; /* Black */
  padding: 40px 20px;
  text-align: center;
`;

const VideoWrapper = styled.div`
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

const VideoTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: bold;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const CTAButton = styled.a`
  margin-top: 20px;
  display: inline-block;
  padding: 10px 20px;
  background-color: #f05454; /* Red */
  color: #ffffff; /* White */
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #d94343; /* Darker Red */
  }
`;

// Component
const VideoTestimonial = ({ title, subtitle, videoSrc, ctaText, ctaLink }) => {
  return (
    <VideoSectionContainer>
      <VideoWrapper>
        <VideoTitle>{title}</VideoTitle>
        <SubTitle>{subtitle}</SubTitle>
        <VideoFrame
          src={videoSrc}
          title="Video Testimonial"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <CTAButton href={ctaLink} target="_blank" rel="noopener noreferrer">
          {ctaText}
        </CTAButton>
      </VideoWrapper>
    </VideoSectionContainer>
  );
};

export default VideoTestimonial;
