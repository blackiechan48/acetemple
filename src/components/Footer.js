// Import necessary libraries
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Define a styled text
const Text = styled.p`
  font-size: 1rem;
  margin-top: 2px;
  color: #6c757d;
  text-align: center;
`;

// Define a styled container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  padding: 1px;
`;

// Define a styled link container
const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1px;
`;

// Define a styled link
const StyledLink = styled(Link)`
  color: #007BFF;
  text-decoration: none;
  font-size: 16px;
  margin: 0 1.2px;

  &:hover {
    text-decoration: underline;
  }
`;

// Define a styled social icon link
const SocialLink = styled.a`
  color: #007BFF;
  font-size: 24px;
  margin: 0 1px;
  text-decoration: none;

  &:hover {
    color: #0056b3;
  }
`;

// Define your component
const Footer = () => {
  return (
    <Container>
      <p>&copy; Olu Olayeni 2024</p>
      <LinksContainer>
        <StyledLink to="/privacy">Privacy Policy</StyledLink>
        <StyledLink to="/terms">Terms and Conditions</StyledLink>
      </LinksContainer>
      <LinksContainer>
        <SocialLink href="https://www.instagram.com/acetemple" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialLink>
        <SocialLink href="https://www.facebook.com/Acetemplehealth" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </SocialLink>
        <SocialLink href="https://wa.me/07743593939" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </SocialLink>
      </LinksContainer>
      <Text>*DISCLAIMER: Results may vary based on individual circumstances. Commitment and adherence are required.</Text>
    </Container>
  );
};

export default Footer;
