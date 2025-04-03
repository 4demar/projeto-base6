import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background: linear-gradient(90deg, #009c3b, #002776);
  color: white;
  padding: 1.5rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    padding: 1rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.75rem;
  font-weight: bold;
  left: 20px;
`;

export const LogoIcon = styled.div`
  background-color: #ffdf00;
  color: #002776;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: #ffdf00;
      transition: width 0.3s;
    }
    
    &:hover:after {
      width: 100%;
    }
    
    &:hover {
      opacity: 0.9;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    gap: 1rem;
  }
`;