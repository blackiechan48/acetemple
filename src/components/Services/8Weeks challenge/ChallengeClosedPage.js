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
  box-sizing: border-box;
`;

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 30px;
  padding: 0 10px;

  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  color: #f4ce14;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  color: #222831;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;

  strong {
    color: #000;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  width: 90%;
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #f4ce14;
    box-shadow: 0 0 5px rgba(244, 206, 20, 0.5);
  }
`;

const StyledSelect = styled.select`
  width: 48%; /* Adjust to fit side by side */
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;
  background-color: white;

  &:focus {
    outline: none;
    border-color: #f4ce14;
    box-shadow: 0 0 5px rgba(244, 206, 20, 0.5);
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; /* Ensures the row spans the full width of the form */
  gap: 4%; /* Add spacing between the dropdowns */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack on smaller screens */
    gap: 15px; /* Add spacing for stacked layout */
  }
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #222831;
  margin-bottom: 10px;
  display: block;
  text-align: left;
  width: 100%; /* Ensure label spans full width */
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
  width: 100%;

  &:hover {
    background-color: #d94343;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px;
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ChallengeClosedPage = () => {
  // Create an array of days (1-31)
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <PageContainer>
      {/* Title Section */}
      <TitleSection>
        <MainTitle>New Challenge Coming Soon!</MainTitle>
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
          {/* Birth Date Section */}
          <Label htmlFor="birthday">Birthday</Label>
          <FlexRow id="birthday">
            <StyledSelect name="BIRTHDAY" id="mce-BIRTHDAY" required>
              <option value="" disabled selected>
                Select day
              </option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </StyledSelect>
            <StyledSelect name="BIRTHMONTH" id="mce-BIRTHMONTH" required>
              <option value="" disabled selected>
                Select month
              </option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </StyledSelect>
          </FlexRow>
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
