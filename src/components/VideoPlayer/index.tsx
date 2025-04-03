import React, { useRef, useEffect } from 'react';
import { CloseButton, Overlay, PlayerContainer, VideoElement } from './styles';
import { FaWindowClose } from 'react-icons/fa';

interface VideoPlayerProps {
   videoId: string | null;
   onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, onClose }) => {
   const overlayRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
         if (e.key === 'Escape') {
            onClose();
         }
      };

      const handleClickOutside = (e: MouseEvent) => {
         if (overlayRef.current === e.target) {
            onClose();
         }
      };

      window.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);

      // Prevenir scroll quando o modal estiver aberto
      if (videoId) {
         document.body.style.overflow = 'hidden';
      }

      return () => {
         window.removeEventListener('keydown', handleEscape);
         document.removeEventListener('mousedown', handleClickOutside);
         document.body.style.overflow = 'auto';
      };
   }, [videoId, onClose]);

   if (!videoId) return null;

   // Exemplo de URL de vídeo baseado no ID
   const videoUrl = `https://storage.googleapis.com/tutorial-assets/${videoId}.mp4`;

   return (
      <Overlay isOpen={!!videoId} ref={overlayRef}>
         <PlayerContainer>
            <CloseButton onClick={onClose}>
               <FaWindowClose size={20} />
            </CloseButton>
            <VideoElement
               src={videoUrl}
               controls
               autoPlay
            />
         </PlayerContainer>
      </Overlay>
   );
};

export default VideoPlayer;
