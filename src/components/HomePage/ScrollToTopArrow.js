// src/components/ScrollToTopArrow.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

// Animation for fade-in effect
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled component for the scroll-to-top button
const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  background-color: #f4ce14;
  color: #ffffff;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.3s ease-in;

  &:hover {
    background-color: #f05454;
  }

  @media (min-width: 768px) {
    display: none; /* Hide on larger screens */
  }
`;

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button only when scrolled down a certain distance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ScrollButton onClick={scrollToTop} isVisible={isVisible}>
      <FontAwesomeIcon icon={faArrowUp} />
    </ScrollButton>
  );
};

export default ScrollToTopArrow;
