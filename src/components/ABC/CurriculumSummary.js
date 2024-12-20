import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const CurriculumContainer = styled.div`
  background-color: #f4ce14;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h2`
  color: #222831;
  font-size: 2rem;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const WeekContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const WeekButton = styled.button`
  width: 100%;
  background-color: #ffffff;
  color: #222831;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: left;
  padding: 15px 20px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ToggleIcon = styled.span`
  font-size: 1.5rem;
  color: #222831;
  font-weight: bold;
  margin-left: 10px;
`;

const WeekDescription = styled.div`
  background-color: #f05454;
  color: #ffffff;
  padding: 10px 15px;
  margin-top: -10px;
  margin-bottom: 10px;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Component
const CurriculumSummary = () => {
  const [activeWeek, setActiveWeek] = useState(null);

  const curriculum = [
    { week: 1, title: 'Setting the Foundation', description: 'Define your goals, establish your starting point, and learn key principles for lasting success.' },
    { week: 2, title: 'Building Momentum', description: 'Create consistency with progressive workouts and simple, effective nutrition strategies.' },
    { week: 3, title: 'Strength & Conditioning', description: 'Boost your overall strength, improve endurance, and step up your training intensity.' },
    { week: 4, title: 'Pushing Your Limits', description: 'Challenge yourself with advanced exercises and refine your form to break through barriers.' },
    { week: 5, title: 'Overcoming Plateaus', description: 'Implement targeted adjustments to keep making progress, even when results slow down.' },
    { week: 6, title: 'Refining Your Results', description: 'Fine-tune your workouts, nutrition, and routines to maximize your improvements.' },
    { week: 7, title: 'Building for the Future', description: 'Develop long-term habits and strategies to ensure your results last well beyond this program.' },
    { week: 8, title: 'Reflecting & Celebrating', description: 'Assess your achievements, acknowledge your growth, and celebrate how far you’ve come.' },
    { week: 9, title: 'Planning Your Next Steps', description: 'Set new goals, create a clear action plan, and move forward with confidence and momentum.' },
  ];

  const toggleWeek = (week) => {
    setActiveWeek(activeWeek === week ? null : week);
  };

  return (
    <CurriculumContainer>
      <Title>Your 8-Week Roadmap to Success</Title>
      <WeekContainer>
        {curriculum.map(({ week, title, description }) => (
          <div key={week}>
            <WeekButton onClick={() => toggleWeek(week)}>
              <span>
                Week {week}: {title}
              </span>
              <ToggleIcon>{activeWeek === week ? '-' : '+'}</ToggleIcon>
            </WeekButton>
            {activeWeek === week && <WeekDescription>{description}</WeekDescription>}
          </div>
        ))}
      </WeekContainer>
    </CurriculumContainer>
  );
};

export default CurriculumSummary;
