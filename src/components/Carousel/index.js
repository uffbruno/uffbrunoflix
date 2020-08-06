import React from 'react';
import Slider, { SliderItem } from './components/Slider';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink
            && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
            )}
        </>
      )}

      {videos.length === 0 && <div>Não há videos cadastrados nesta categoria</div>}

      {videos.length > 0
      && (
      <Slider arrowColor={categoryColor}>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
      )}
    </VideoCardGroupContainer>
  );
}

export default Carousel;
