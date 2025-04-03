import { styled } from "styled-components";

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s;
`;

export const PlayerContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 900px;
  background-color: black;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  transform: scale(0.95);
  transition: transform 0.3s ease;
  
  ${Overlay}[isOpen="true"] & {
    transform: scale(1);
  }
`;

export const VideoElement = styled.video`
  width: 100%;
  display: block;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  z-index: 1;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
