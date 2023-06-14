import React from 'react';
import ScreenModel from '../../../components/General/ScreenModel/ScreenModel';

import SerieCard from '../../../components/General/SerieCard/SerieCard';
import Carousel from '../../../components/General/Carousel/Carousel';
import EmptyInfo from '../../../components/General/EmptyInfo/EmptyInfo';






const Disliked = () => {


  const series = [
    // <SerieCard serieLista={"piores/"} serieId={"1"} />,
    // <SerieCard serieLista={"piores/"}  serieId={"2"} />,
    // <SerieCard serieLista={"piores/"}  serieId={"3"} />,
    // <SerieCard serieLista={"piores/"} serieId={"1"} />,
    // <SerieCard serieLista={"piores/"}  serieId={"2"} />,
    // <SerieCard serieLista={"piores/"}  serieId={"3"} />,
    // <SerieCard serieLista={"piores/"} serieId={"1"} />,
    // <SerieCard serieLista={"piores/"}  serieId={"2"} />,
    // <SerieCard serieLista={"piores/"}  serieId={"3"} />,
    // <SerieCard serieLista={"piores/"} serieId={"1"} />,
    // <SerieCard serieLista={"piores/"}  serieId={"2"} />,
    // <SerieCard serieLista={"piores/"}  serieId={"3"} />,
    // <SerieCard serieLista={"piores/"} serieId={"1"} />,
    // <SerieCard serieLista={"piores/"}  serieId={"2"} />,
    // <SerieCard serieLista={"piores/"}  serieId={"3"} />,
    // <SerieCard serieLista={"piores/"} serieId={"1"} />,
    // <SerieCard serieLista={"piores/"}  serieId={"2"} />,
    // <SerieCard serieLista={"piores/"}  serieId={"3"} />,
    
  ]
  return (
 
    <ScreenModel  checkedItem={"disliked"}  apelido={"Akemi"} titlePage={"Piores"}>
   
    {
   series.length == 0 ? <EmptyInfo/> :  <Carousel> {series} </Carousel>
    }
   
    </ScreenModel>

 

   
  )
}

export default Disliked;