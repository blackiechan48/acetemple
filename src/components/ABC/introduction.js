import React from 'react';
import styled from 'styled-components';

// Styled Components
const IntroductionContainer = styled.div`
  background-color: #f4ce14; /* Yellow */
  color: #222831; /* Black */
  padding: 40px 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #222831;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const HighlightedText = styled.span`
  font-weight: bold;
  color: #f05454; /* Red */
`;

const ImaginarySection = styled.div`
  margin-top: 30px;
  padding: 20px;
  border: 2px dashed #222831;
  border-radius: 10px;
  background-color: #dddddd; /* Light Grey */
`;

const CallToAction = styled.h3`
  font-size: 1.5rem;
  margin-top: 30px;
  font-weight: bold;
  color: #222831;

  @media (max-width: 768px) {
    font-size: 1.rem;
  }
`;

// Component
const Introduction = () => {
  return (
    <IntroductionContainer>
      <SectionTitle>DO YOU FEEL LIKE YOU’RE STUCK IN A NEVER-ENDING FITNESS CYCLE?</SectionTitle>
      <Paragraph>
        You’ve tried everything—random workout videos, trendy diets, and apps that promised results. But nothing seems
        to stick. Maybe you’ve seen some progress, but life gets in the way: long workdays, unexpected responsibilities,
        and that constant voice in your head saying, <HighlightedText>“I’ll start again next week.”</HighlightedText>
      </Paragraph>
      <Paragraph>
        It’s frustrating, isn’t it? You want to feel confident when you look in the mirror. You crave energy that lasts
        all day, not just fleeting motivation. You dream of finally breaking free from quick fixes and finding something
        that works for <HighlightedText>YOU</HighlightedText>, long term.
      </Paragraph>
      <ImaginarySection>
        <SectionTitle>BUT IMAGINE THIS…</SectionTitle>
        <Paragraph>
          Imagine walking into your next big event feeling confident, proud, and strong—wearing clothes you love and
          knowing you’ve taken control of your health.
        </Paragraph>
        <Paragraph>
          Picture having a simple, sustainable plan that’s designed for your life. A plan that helps you finally stop
          guessing and start seeing real results.
        </Paragraph>
        <Paragraph>
          What if, in just 8 weeks, you could look back and say:
          <HighlightedText>"This time, I didn’t give up. This time, I did it."</HighlightedText>
        </Paragraph>
      </ImaginarySection>
      <CallToAction>IT’S NOT A DREAM. IT’S A PLAN.</CallToAction>
      <Paragraph>
        With the right structure, expert support, and accountability, this isn’t just possible—
        <HighlightedText>it’s inevitable.</HighlightedText>
      </Paragraph>
    </IntroductionContainer>
  );
};

export default Introduction;
