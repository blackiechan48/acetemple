import React from 'react';
import styled from 'styled-components';

// Styled Components
const SectionContainer = styled.div`
  background-color: #f8f9fa; /* Light grey */
  padding: 40px 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #222831; /* Black */
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const FeatureBox = styled.div`
  background: #ffffff; /* White */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const FeatureTitle = styled.h3`
  color: #f05454; /* Red */
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const FeatureText = styled.p`
  color: #222831; /* Black */
  line-height: 1.6;
  font-size: 1rem;
`;

const WhatsIncluded = () => {
  const features = [
    {
      title: 'Personalized Nutrition',
      details: [
        'Tailored calorie and macronutrient goals based on individual needs.',
        'Flexible meal plans with options for dietary preferences.',
        'Recipes and meal prep guides for sustainable eating habits.',
        'Support with tracking apps like MyFitnessPal.',
      ],
    },
    {
      title: 'Customized Workout Plans',
      details: [
        'Progressive strength training routines (3-5 days/week).',
        'Scalable for all fitness levels, with video demonstrations for form.',
        'Cardio integration (steady-state and HIIT) to boost fat burning.',
        'Focus on progressive overload for strength and muscle retention.',
      ],
    },
    {
      title: 'Accountability Systems',
      details: [
        'Weekly check-ins to adjust goals and track progress.',
        'Bi-weekly progress photos, weight, and measurements.',
        'Daily motivational messages and challenges in a private group.',
      ],
    },
    {
      title: 'Community Support',
      details: [
        'Private group chat or forum for sharing wins and challenges.',
        'Leaderboards and mini-challenges to foster healthy competition.',
        'Live Q&A sessions and group workout challenges.',
      ],
    },
    {
      title: 'Education and Motivation',
      details: [
        'Guidance on training fundamentals and nutrition.',
        'Journaling prompts to track non-scale victories and long-term habits.',
        'Milestone celebrations and a memorable program conclusion.',
      ],
    },
    {
      title: 'Tools and Resources',
      details: [
        'Tracking templates for workouts and nutrition.',
        'Meal prep guides and progress tracking sheets.',
        'Certificates of completion for participants who finish the challenge.',
      ],
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle>What's Included</SectionTitle>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureBox key={index}>
            <FeatureTitle>{feature.title}</FeatureTitle>
            {feature.details.map((detail, idx) => (
              <FeatureText key={idx}>• {detail}</FeatureText>
            ))}
          </FeatureBox>
        ))}
      </FeaturesGrid>
    </SectionContainer>
  );
};

export default WhatsIncluded;
