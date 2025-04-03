import { styled } from "styled-components";

export const GallerySection = styled.section`
  padding: 2rem;
  background-color: #f5f5f5;
`;

export const GalleryTitle = styled.h2`
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
    background: linear-gradient(90deg, #009c3b, #ffdf00);
    border-radius: 2px;
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;