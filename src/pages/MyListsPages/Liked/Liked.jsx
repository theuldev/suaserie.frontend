import React from 'react';
import ScreenModel from '../../../components/General/ScreenModel/ScreenModel';

import SerieCard from '../../../components/General/SerieCard/SerieCard';
import Carousel from '../../../components/General/Carousel/Carousel';
import EmptyInfo from '../../../components/General/EmptyInfo/EmptyInfo';







const Liked = () => {


  const series = [
    <SerieCard serieLista={"favoritas/"} serieId={"1"} />,
    <SerieCard serieLista={"favoritas/"}  serieId={"2"} />,
    <SerieCard serieLista={"favoritas/"}  serieId={"3"} />,
    <SerieCard serieLista={"favoritas/"} serieId={"1"} />,
    <SerieCard serieLista={"favoritas/"}  serieId={"2"} />,
    <SerieCard serieLista={"favoritas/"}  serieId={"3"} />,
    <SerieCard serieLista={"favoritas/"} serieId={"1"} />,
    <SerieCard serieLista={"favoritas/"}  serieId={"2"} />,
    <SerieCard serieLista={"favoritas/"}  serieId={"3"} />,
    <SerieCard serieLista={"favoritas/"} serieId={"1"} />,
    <SerieCard serieLista={"favoritas/"}  serieId={"2"} />,
    <SerieCard serieLista={"favoritas/"}  serieId={"3"} />,
    <SerieCard serieLista={"favoritas/"} serieId={"1"} />,
    <SerieCard serieLista={"favoritas/"}  serieId={"2"} />,
    <SerieCard serieLista={"favoritas/"}  serieId={"3"} />,
    <SerieCard serieLista={"favoritas/"} serieId={"1"} />,
    <SerieCard serieLista={"favoritas/"}  serieId={"2"} />,
    <SerieCard serieLista={"favoritas/"}  serieId={"3"} />,
  ]
  return (
 
    <ScreenModel  checkedItem={"liked"}  apelido={"Akemi"} titlePage={"Favoritas"}>
    {
   series.length == 0 ? <EmptyInfo/> :  <Carousel> {series} </Carousel>
    }
    </ScreenModel>

 

   
  )
}

export default Liked;