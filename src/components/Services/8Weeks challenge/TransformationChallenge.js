import React from 'react';
import AbcHero from './AbcHero';
import SocialProof from './SocialProof'; 
import WhatsIncluded from './WhatsIncluded';
import CallToAction from './CallToAction';
import VideoTestimonial from './VideoTestimonial'
import GuaranteeBanner from './GuaranteeBanner';

const TransformationChallenge = () => {
  return (
    <>
      <AbcHero />
      <SocialProof /> 
      <VideoTestimonial/>
      <GuaranteeBanner/>
      <WhatsIncluded/>
      <GuaranteeBanner/>
      <CallToAction/>
    </>
  );
};

export default TransformationChallenge;



// import React, { useState } from 'react';
// import styled from 'styled-components';

// // Styled Components
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
//   padding: 20px;
//   background-color: #dddddd; /* Grey background */
//   text-align: center;
// `;

// const Title = styled.h1`
//   font-size: 2.5em;
//   color: #f4ce14; /* Yellow title */
//   margin-bottom: 15px;

//   @media (max-width: 768px) {
//     font-size: 2em;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.8em;
//   }
// `;

// const Message = styled.p`
//   font-size: 1.2em;
//   color: #222831; /* Black text */
//   max-width: 600px;
//   margin-bottom: 20px;

//   @media (max-width: 768px) {
//     font-size: 1em;
//   }

//   @media (max-width: 480px) {
//     font-size: 0.9em;
//   }
// `;

// const Form = styled.form`
//   width: 100%;
//   max-width: 400px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Input = styled.input`
//   padding: 10px;
//   margin-top: 15px;
//   font-size: 1rem;
//   border-radius: 4px;
//   border: 1px solid #ddd;
//   width: 95%;

//   @media (max-width: 480px) {
//     font-size: 0.9rem;
//     padding: 8px;
//   }
// `;

// const SubmitButton = styled.button`
//   padding: 10px 20px;
//   font-size: 1rem;
//   margin-top: 15px;
//   color: white;
//   background-color: #f05454; /* Red button */
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #d94343;
//   }

//   @media (max-width: 480px) {
//     font-size: 0.9rem;
//     padding: 8px 16px;
//   }
// `;

// const SuccessMessage = styled.p`
//   font-size: 1.1em;
//   color: green;
//   margin-top: 15px;

//   @media (max-width: 768px) {
//     font-size: 1em;
//   }

//   @media (max-width: 480px) {
//     font-size: 0.9em;
//   }
// `;

// const TransformationChallenge = () => {
//   const [formData, setFormData] = useState({ firstName: '', email: '' });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleEmailSubmit = (e) => {
//     e.preventDefault();

//     // Add logic here to send email to backend or an email list manager like Mailchimp
//     setFormData({ firstName: '', email: '' });
//     setIsSubmitted(true);
//   };

//   return (
//     <Container>
//       <Title>Body Transformation Challenge Closed</Title>
//       <Message>
//         The Body Transformation Challenge is currently closed. Enter your first name and email below to be the first to know
//         when the next challenge opens and receive an early bird discount!
//       </Message>
//       <Form onSubmit={handleEmailSubmit}>
//         <Input
//           type="text"
//           name="firstName"
//           placeholder="Enter your first name"
//           value={formData.firstName}
//           onChange={handleChange}
//           required
//         />
//         <Input
//           type="email"
//           name="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <SubmitButton type="submit">Notify Me</SubmitButton>
//       </Form>
//       {isSubmitted && (
//         <SuccessMessage>
//           Thank you, {formData.firstName}! You will  be notified about the next challenge and early bird discounts.
//         </SuccessMessage>
//       )}
//     </Container>
//   );
// };

// export default TransformationChallenge;
