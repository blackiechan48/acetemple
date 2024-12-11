import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #f05454;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d94343;
  }
`;

const CTAButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default CTAButton;
