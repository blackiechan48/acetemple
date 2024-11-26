import React from "react";
import styled from "styled-components";

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #f4f4f4, #e8e8e8);
  font-family: "Arial", sans-serif;
  box-sizing: border-box; // Ensure padding doesn't cause overflow
`;

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 30px;
  padding: 0 10px; // Prevent overflow on mobile

  @media (max-width: 768px) {
    padding: 0 5px; // Reduce padding further for smaller screens
  }
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  color: #f4ce14;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem; // Adjust font size for mobile
  }
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  color: #222831;
  max-width: 800px; // Constrain width
  width: 100%;
  margin: 0 auto;

  strong {
    color: #000;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%; // Ensure it fits on mobile
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px; // Prevent form from getting too wide
  width: 90%;
  background: white;
  padding: 20px; // Adjusted for mobile
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box; // Prevent padding overflow

  @media (max-width: 768px) {
    padding: 15px; // Smaller padding for mobile
  }
`;

const StyledInput = styled.input`
  width: 100%; // Full width within the container
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box; // Ensure padding fits within width

  &:focus {
    outline: none;
    border-color: #f4ce14;
    box-shadow: 0 0 5px rgba(244, 206, 20, 0.5);
  }
`;

const SubmitButton = styled.input`
  background-color: #f05454;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%; // Ensure button scales with input fields

  &:hover {
    background-color: #d94343;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px; // Adjust padding for smaller screens
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 0.8rem; // Adjust font size for mobile
  }
`;

const ChallengeClosedPage = () => {
  return (
    <PageContainer>
      {/* Title Section */}
      <TitleSection>
        <MainTitle>Body Transformation Challenge Closed</MainTitle>
        <SubTitle>
          <strong>The Body Transformation Challenge</strong> is currently closed. Enter your first name and email below
          to be the first to know when the next challenge opens and receive an <strong>early bird discount!</strong>
        </SubTitle>
      </TitleSection>

      {/* Form Section */}
      <FormContainer>
        <form
          action="https://acetemple.us16.list-manage.com/subscribe/post?u=9a2533ed7418a68b40bc24d2f&amp;id=befc2df0ec&amp;f_id=000a19e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <StyledInput
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            placeholder="Enter your email address"
            required
          />
          <StyledInput
            type="text"
            name="FNAME"
            id="mce-FNAME"
            placeholder="Enter your first name"
          />
          <StyledInput
            type="text"
            name="BIRTHDAY"
            id="mce-BIRTHDAY"
            placeholder="Enter your birthday (DD/MM)"
            pattern="^\\d{2}/\\d{2}$"
            title="Please enter your birthday in the format DD/MM (e.g., 25/12)"
          />
          <SubmitButton
            type="submit"
            value="Notify Me"
            name="subscribe"
            id="mc-embedded-subscribe"
          />
        </form>
        <FooterText>Your information is safe with us. No spam, just updates!</FooterText>
      </FormContainer>
    </PageContainer>
  );
};

export default ChallengeClosedPage;
