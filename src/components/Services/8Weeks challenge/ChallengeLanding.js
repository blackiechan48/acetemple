import React from "react";
import styled from "styled-components";

// Styled Components
const PageContainer = styled.div`
  background: linear-gradient(to bottom, #f4ce14, #fff7e6); /* Gradient Yellow */
  color: #222831; /* Black */
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  text-align: center;
  min-height: 100vh;
`;

const FormContainer = styled.div`
  background: #ffffff;
  color: #222831;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
`;

const Headline = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #f05454; /* Red */

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subheadline = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: 400;
  color: #555555;
`;

const Timer = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #f05454; /* Red */
  margin-bottom: 20px;
`;

const BenefitsList = styled.ul`
  text-align: left;
  margin: 20px auto;
  padding: 0;
  max-width: 600px;
  list-style: none;

  li {
    margin-bottom: 10px;
    font-size: 1rem;
    color: #555555;

    &::before {
      content: "✔";
      color: #f05454; /* Red */
      font-weight: bold;
      margin-right: 10px;
    }
  }
`;

const InputContainer = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #f05454; /* Red */
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #f05454; /* Red */
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d94343; /* Darker Red */
  }
`;

const Disclaimer = styled.p`
  font-size: 0.8rem;
  color: #777;
  margin-top: 15px;
  text-align: center;
`;

const TrustBadge = styled.div`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #555555;
  font-style: italic;

  span {
    color: #f05454; /* Red */
    font-weight: bold;
  }
`;

// Component
const ChallengeLanding = () => {
  return (
    <PageContainer>
      <Headline>Claim Your Spot in the Ace Body Challenge Today!</Headline>
      <Subheadline>
        Get expert guidance, personalized plans, and group motivation for FREE!
      </Subheadline>
      <Timer>Enter before December 24th for your chance to win 1 of 2 FREE spots!</Timer>
      <BenefitsList>
        <li>Personalized workout and nutrition plans.</li>
        <li>Expert coaching and accountability.</li>
        <li>Chance to transform your body in 8 weeks.</li>
      </BenefitsList>
      <FormContainer>
        <form
          action="https://acetemple.us16.list-manage.com/subscribe/post?u=9a2533ed7418a68b40bc24d2f&amp;id=befc2df0ec&amp;f_id=000a19e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          {/* Email Field */}
          <InputContainer>
            <Label htmlFor="mce-EMAIL">Email Address *</Label>
            <Input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              placeholder="youremail@example.com"
              required
            />
          </InputContainer>

          {/* First Name Field */}
          <InputContainer>
            <Label htmlFor="mce-FNAME">First Name</Label>
            <Input
              type="text"
              name="FNAME"
              id="mce-FNAME"
              placeholder="Jane"
            />
          </InputContainer>

          {/* Submit Button */}
          <SubmitButton type="submit" name="subscribe">
            Enter to Win Now!
          </SubmitButton>
        </form>
        <Disclaimer>
          By signing up, you agree to receive emails about the ACE Body Challenge. You can unsubscribe
          anytime.
        </Disclaimer>
        <TrustBadge>
          <span>100% Privacy Guaranteed:</span> Your information is safe with us—we’ll never spam you.
        </TrustBadge>
      </FormContainer>
    </PageContainer>
  );
};

export default ChallengeLanding;
