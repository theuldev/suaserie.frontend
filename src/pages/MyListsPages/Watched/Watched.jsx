import React from 'react';
import ScreenModel from '../../../components/General/ScreenModel/ScreenModel';

import SerieCard from '../../../components/General/SerieCard/SerieCard';
import Carousel from '../../../components/General/Carousel/Carousel';
import EmptyInfo from '../../../components/General/EmptyInfo/EmptyInfo';







const Watched = () => {


  const series = [
    <SerieCard serieLista={"assistidas/"} serieId={"1"} />,
    <SerieCard serieLista={"assistidas/"}  serieId={"2"} />,
    <SerieCard serieLista={"assistidas/"}  serieId={"3"} />,
    <SerieCard serieLista={"assistidas/"} serieId={"1"} />,
    <SerieCard serieLista={"assistidas/"}  serieId={"2"} />,
    <SerieCard serieLista={"assistidas/"}  serieId={"3"} />,
    <SerieCard serieLista={"assistidas/"} serieId={"1"} />,
    <SerieCard serieLista={"assistidas/"}  serieId={"2"} />,
    <SerieCard serieLista={"assistidas/"}  serieId={"3"} />,
    <SerieCard serieLista={"assistidas/"} serieId={"1"} />,
    <SerieCard serieLista={"assistidas/"}  serieId={"2"} />,
    <SerieCard serieLista={"assistidas/"}  serieId={"3"} />,
    <SerieCard serieLista={"assistidas/"} serieId={"1"} />,
    <SerieCard serieLista={"assistidas/"}  serieId={"2"} />,
    <SerieCard serieLista={"assistidas/"}  serieId={"3"} />,
    <SerieCard serieLista={"assistidas/"} serieId={"1"} />,
    <SerieCard serieLista={"assistidas/"}  serieId={"2"} />,
    <SerieCard serieLista={"assistidas/"}  serieId={"3"} />,
  ]
  return (
 
    <ScreenModel  checkedItem={"watched"}  apelido={"Akemi"} titlePage={"Assistidas"}>
     {
   series.length == 0 ? <EmptyInfo/> :  <Carousel> {series} </Carousel>
    }
    </ScreenModel>

 

   
  )
}

export default Watched;