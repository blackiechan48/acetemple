import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/images/Hero-image.jpg';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #343a40;
`;

const HeroLink = styled.a`
display: inline-block;
margin-bottom;
font-size: 1.5rem;
`;

const HeroImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Button = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
const IntroText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 20px;
  color: #6c757d;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 1rem;
  color: #007bff;
  padding: 10px 15px;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e9ecef;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
     <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/ForeverMission">About</NavLink>
        <NavLink href="/testimonials">Testimonials</NavLink>
        <NavLink href="/services">Services</NavLink>
        {/* <NavLink href="/blog">Blog</NavLink> */}
        <NavLink href="/contact">Contact</NavLink>
      </Nav>
   
    </HeaderContainer>
  );
};

export default Header;
