import React from 'react';
import { PlayButton, PlayOverlay, ThumbContainer, Thumbnail, VideoDuration, VideoInfo, VideoTitle } from './styles';
import { FaPlay } from 'react-icons/fa';

interface VideoThumbnailProps {
   id: string;
   title: string;
   thumbnail: string;
   duration: string;
   onClick: (id: string) => void;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
   id,
   title,
   thumbnail,
   duration,
   onClick
}) => {
   return (
      <ThumbContainer onClick={() => onClick(id)}>
         <Thumbnail src={thumbnail} alt={title} />
         <VideoDuration>{duration}</VideoDuration>
         <PlayOverlay className="play-overlay">
            <PlayButton>
               <FaPlay color="#002776" size={24} />
            </PlayButton>
         </PlayOverlay>
         <VideoInfo>
            <VideoTitle>{title}</VideoTitle>
         </VideoInfo>
      </ThumbContainer>
   );
};

export default VideoThumbnail;
