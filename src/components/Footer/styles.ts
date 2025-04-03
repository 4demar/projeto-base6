import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #002776;
  color: white;
  padding: 2rem;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const FooterColumn = styled.div`
  flex: 1;
`;

export const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: #ffdf00;
  }
`;

export const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 0.5rem;
    
    a {
      color: #e0e0e0;
      text-decoration: none;
      transition: color 0.2s;
      
      &:hover {
        color: #ffdf00;
      }
    }
  }
`;

export const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: #e0e0e0;
`;