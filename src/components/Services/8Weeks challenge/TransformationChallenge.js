// import React from 'react';
// import AbcHero from './AbcHero';
// import SocialProof from './SocialProof'; 
// import WhatsIncluded from './WhatsIncluded';
// import CallToAction from './CallToAction';
// import VideoTestimonial from './VideoTestimonial'
// import GuaranteeBanner from './GuaranteeBanner';

// const TransformationChallenge = () => {
//   return (
//     <>
//       <AbcHero />
//       <SocialProof /> 
//       <VideoTestimonial/>
//       <GuaranteeBanner/>
//       <WhatsIncluded/>
//       <GuaranteeBanner/>
//       <CallToAction/>
//     </>
//   );
// };

// export default TransformationChallenge;


// delete or turn off codes below when challnege sign up is live 
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #ddd;
`;

const Title = styled.h1`
  color: #222831;
  font-size: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  font-size: 1rem;
  color: #222831;
`;

const Input = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #f4ce14;
  color: #222831;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #f05454;
  }
`;

const BodyTransformationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Container>
      <Title>Body Transformation Challenge</Title>
      <Form
        name="transformation-challenge" // Form name for Netlify
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="transformation-challenge" />
        <Label htmlFor="firstName">First Name:</Label>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <Label htmlFor="email">Email Address:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Button type="submit">Notify Me</Button>
      </Form>
    </Container>
  );
};

export default BodyTransformationForm;
