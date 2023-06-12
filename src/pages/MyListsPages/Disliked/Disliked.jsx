import React from 'react';
import "./Disliked.css";
import ScreenModel from '../../../components/General/ScreenModel/ScreenModel';
import Carousel from '../../../components/General/Carousel/Carousel';
import SerieCard from '../../../components/General/SerieCard/SerieCard';







const Disliked = () => {
  return (
    <ScreenModel>
      <Carousel>
        <SerieCard  isFirst={true} />
        <SerieCard isFirst={false}/>
        <SerieCard isFirst={false} />
        <SerieCard isFirst={false} />
        <SerieCard isFirst={false} />
        <SerieCard isFirst={false} />
        <SerieCard isFirst={false} />
        <SerieCard isFirst={false} />
        <SerieCard isFirst={false} />
        <SerieCard isFirst={false} />
        <SerieCard isFirst={false} />
        <SerieCard isFirst={false} />
        <SerieCard isFirst={false} />
        <SerieCard isFirst={false} />
        <SerieCard isFirst={false} />

      </Carousel>
    </ScreenModel>
  )
}

export default Disliked