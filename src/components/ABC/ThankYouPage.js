import React from "react";
import styled from "styled-components";

// Styled Components
const ThankYouContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  background-color: #f2f2f2;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #222831;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: #555555;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const VideoContainer = styled.div`
  margin: 20px 0;
  iframe {
    width: 100%;
    max-width: 800px;
    height: 450px;
    border: none;
    border-radius: 10px;

    @media (max-width: 768px) {
      height: 250px;
    }
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: #f05454;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d94343;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

const ThankYouPage = () => {
  return (
    <ThankYouContainer>
      <Title>Thank You for Joining the ACE Body Challenge!</Title>
      <Subtitle>Your journey to transformation begins now. Watch the video below for next steps.</Subtitle>
      
      <VideoContainer>
        <iframe
          src="https://www.youtube.com/embed/W3IBmaMuxag" // Replace with your YouTube video link
          title="Welcome to the Challenge"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>

      <Button
        href="https://docs.google.com/forms/d/e/1FAIpQLSdH58Vu9_hMAOczm_D4XIsT5pPLzvMGB1_K5Jo7JT2QqGITfQ/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fill Out the Get Started Form
      </Button>
    </ThankYouContainer>
  );
};

export default ThankYouPage;
