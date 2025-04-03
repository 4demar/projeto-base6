import React, { useState } from 'react';
import styled from 'styled-components';
import { GalleryGrid, GallerySection, GalleryTitle } from './styles';
import { mockVideosData } from './mockVideos';
import VideoPlayer from '../VideoPlayer';
import VideoThumbnail from '../VideoThumbnail';

// Dados de exemplo para os vídeos

const VideoGallery: React.FC = () => {
   const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

   const handleVideoClick = (id: string) => {
      setSelectedVideoId(id);
      console.log(`Vídeo selecionado: ${id}`);
   };

   const handleClosePlayer = () => {
      setSelectedVideoId(null);
   };

   return (
      <GallerySection>
         <GalleryTitle>Vídeos em Destaque</GalleryTitle>
         <GalleryGrid>
            {mockVideosData.map(video => (
               <VideoThumbnail
                  key={video.id}
                  id={video.id}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  duration={video.duration}
                  onClick={handleVideoClick}
               />
            ))}
         </GalleryGrid>
         <VideoPlayer
            videoId={selectedVideoId}
            onClose={handleClosePlayer}
         />
      </GallerySection>
   );
};

export default VideoGallery;
