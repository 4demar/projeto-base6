import { styled } from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  background: linear-gradient(rgba(0, 39, 118, 0.7), rgba(0, 156, 59, 0.7)), 
              url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 5rem 2rem;
  text-align: center;
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

export const HeroButton = styled.button`
  background-color: #ffdf00;
  color: #002776;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const MainContent = styled.main`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const CategoriesSection = styled.section`
  padding: 2rem;
  background-color: white;
`;

export const CategoriesTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #002776;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60%;
    height: 4px;
    background: linear-gradient(90deg, #ffdf00, #009c3b);
    border-radius: 2px;
  }
`;

export const CategoryTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  
  /* Esconder a barra de rolagem */
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
`;

export const CategoryTab = styled.button<{ active?: boolean }>`
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: 2rem;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${props => props.active ? '#002776' : '#f1f1f1'};
  color: ${props => props.active ? 'white' : '#333'};
  
  &:hover {
    background-color: ${props => props.active ? '#002776' : '#e0e0e0'};
  }
`;