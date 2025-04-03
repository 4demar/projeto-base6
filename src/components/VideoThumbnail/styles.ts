import { styled } from "styled-components";

export const ThumbContainer = styled.div`
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
  
  &:hover .play-overlay {
    opacity: 1;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

export const PlayOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 39, 118, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const PlayButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 223, 0, 0.9);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: pulse-scale 2s infinite;
`;

export const VideoInfo = styled.div`
  padding: 0.75rem;
  background-color: white;
`;

export const VideoTitle = styled.h3`
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const VideoDuration = styled.div`
  position: absolute;
  bottom: 40px;
  right: 8px;
  padding: 2px 4px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 0.7rem;
  border-radius: 2px;
`;