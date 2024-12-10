// SpacesLeft.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const SpacesContainer = styled.div`
  text-align: center;
  background-color: #222831;
  color: white;
  padding: 20px;
`;

const ESpacesLeft = () => {
  const [spacesLeft, setSpacesLeft] = useState(15);

  return (
    <SpacesContainer>
      <h2>Spaces Left: {spacesLeft}</h2>
      <button
        onClick={() => setSpacesLeft(spacesLeft - 1)}
        style={{ background: '#f05454', color: 'white', padding: '10px 20px' }}
      >
        Reserve Your Spot
      </button>
    </SpacesContainer>
  );
};

export default ESpacesLeft;
