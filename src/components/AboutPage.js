import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  /* Reverse layout for every odd section */
  &:nth-child(odd) {
    flex-direction: row-reverse;
  }

  /* Mobile-friendly: Stack elements vertically */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextBox = styled.div`
  flex: 1;
  max-width: 600px;

  h1 {
    font-size: 1.8rem;
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: 1.2rem;
    margin: 0.3em 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;

  /* Mobile-friendly: Adjust image size */
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;


const YellowBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background-color: yellow;
  padding: 20px;
  border-radius: 10px;

  /* Mobile-friendly: Stack text boxes vertically */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: black;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: red; /* Darker green on hover */
  }
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      {/* Section 1 */}
      <Section>
        <Image src="/images/smile.png" alt="image of Olu with his hands in his pocket smiling " />
        <TextBox>
          <h1>I'm Olu Olayeni</h1>
          <h3>Personal Trainer and Fitness Coach</h3>
          <h3>I LEAD BY EXAMPLE</h3>
        </TextBox>
      </Section>

      {/* Section 2 */}
      <Section>
        <TextBox>
          <h1>Who Am I?</h1>
          <p>Hi, I’m Olu Olayeni, a personal trainer based in Birmingham, England, and proud dad. 
            Since graduating from university in 2015, I’ve dedicated myself to helping people achieve their fitness goals. Over the years, 
            I've worked in several commercial gyms across Birmingham, working with clients from all backgrounds and fitness levels. <br></br> <br></br>
            Fitness has always been a big part of my life, even though I’ve had my fair share of ups and downs along the way. 
            I've pushed myself to peak shape for competitions, sports performance, and (let's be honest) sometimes just to turn heads—until I met my wife!
             Now, my focus is on staying fit as a ‘trophy husband’ and keeping up with my very energetic son.</p>
        </TextBox>
        <Image src="images/lden hour.png" alt="Your Image" />
      </Section>

    
      <Section>
        <TextBox>
          <h1>What I Do</h1>
          <p>
          I'm a personal trainer best known for helping  <strong> over 100 clients </strong> 
          achieve and maintain their fitness transformations. My work focuses not just on 
          achieving results, but on making sure my clients have the tools to keep them.
          <br></br> <br></br>
          In 2019, I expanded into online coaching, initially as a way to continue supporting 
          clients after completing our one-on-one sessions or for those who had to relocate 
          but still wanted my guidance. This online approach quickly grew, as people outside 
          Birmingham began reaching out for support based on the success and recommendations 
          of my clients. Today, my online coaching program is growing, driven by real results
           and word-of-mouth.
          </p>
        </TextBox>
        <Image src="/images/withmon.png" alt="Your Image" />
      </Section>

      {/* Yellow Box Section */}
      <YellowBox>
  <TextBox>
    <h1>Are You Ready To Change Your Body For Good?</h1>
    <p>
      I believe that lasting change begins with the right guidance. 
      My goal is to equip you with everything you need to transform your health, 
      fitness, and overall happiness, empowering you to live a life you love.
    </p>
  </TextBox>
  <TextBox>
    <h1>Start Your Body Transformation Today</h1>
    <Button 
      href="https://calendly.com/acetemple/consultation?month=2024-10" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Book a Call Back
    </Button>
  </TextBox>
</YellowBox>

    </AboutContainer>
  );
};

export default AboutPage;
