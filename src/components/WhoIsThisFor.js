import React from 'react';
import styled from 'styled-components';

// Styled Components
const SectionContainer = styled.div`
  background-color: #dddddd; /* Grey */
  color: #222831; /* Black */
  padding: 40px 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #f05454; /* Red */
  margin-bottom: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #f4ce14; /* Yellow */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  text-align: left;
  flex: 1;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  color: #222831; /* Black */
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  font-size: 1rem;
  color: #222831;
  line-height: 1.5;
  text-align: left;
`;

const List = styled.ul`
  list-style: disc;
  padding-left: 20px;

  li {
    margin-bottom: 10px;
  }
`;

// Component
const WhoIsThisFor = () => {
  return (
    <SectionContainer>
      <SectionTitle>Who Is This Challenge For?</SectionTitle>
      <FlexContainer>
        <Card>
          <CardTitle>This Challenge Is For You If:</CardTitle>
          <CardContent>
            <List>
              <li>You’re ready to lose weight and feel stronger. This program meets you where you are.</li>
              <li>You’ve struggled with consistency in the past. We provide tools to keep you on track.</li>
              <li>You want a personalized plan that fits your lifestyle.</li>
              <li>You thrive in a supportive community, cheering you on every step of the way.</li>
              <li>You want lasting results, not quick fixes, with sustainable habits that stick with you.</li>
            </List>
          </CardContent>
        </Card>
        <Card>
          <CardTitle>This Challenge Might Not Be For You If:</CardTitle>
          <CardContent>
            <List>
              <li>You’re looking for quick fixes rather than sustainable habits.</li>
              <li>You’re unwilling to commit to consistency and effort.</li>
              <li>You’re not ready to invest in yourself and your transformation.</li>
              <li>You prefer to go it alone without group support or accountability.</li>
              <li>You’re unwilling to make small changes and adapt to grow.</li>
            </List>
          </CardContent>
        </Card>
      </FlexContainer>
    </SectionContainer>
  );
};

export default WhoIsThisFor;
