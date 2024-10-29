import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: relative;
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 15px;
  @media (max-width: 768px) {
    flex-direction: column;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    transform: ${props => (props.isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  }
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

const BurgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 5px 0;
    transition: all 0.3s ease;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <BurgerIcon onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </BurgerIcon>
      <Nav isOpen={isOpen}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/AboutPage">About</NavLink>
        <NavLink href="/testimonials">Testimonials</NavLink>
        <NavLink href="/services">Services</NavLink>
        
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
