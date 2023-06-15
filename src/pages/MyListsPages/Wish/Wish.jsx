import React from 'react';
import ScreenModel from '../../../components/General/ScreenModel/ScreenModel';

import SerieCard from '../../../components/General/SerieCard/SerieCard';
import Carousel from '../../../components/General/Carousel/Carousel';
import EmptyInfo from '../../../components/General/EmptyInfo/EmptyInfo';







const Wish = () => {


  const series = [
    <SerieCard serieLista={"desejoVer/"} serieId={"1"} />,
    <SerieCard serieLista={"desejoVer/"}  serieId={"2"} />,
    <SerieCard serieLista={"desejoVer/"}  serieId={"3"} />,
    <SerieCard serieLista={"desejoVer/"} serieId={"1"} />,
    <SerieCard serieLista={"desejoVer/"}  serieId={"2"} />,
    <SerieCard serieLista={"desejoVer/"}  serieId={"3"} />,
    <SerieCard serieLista={"desejoVer/"} serieId={"1"} />,
    <SerieCard serieLista={"desejoVer/"}  serieId={"2"} />,
    <SerieCard serieLista={"desejoVer/"}  serieId={"3"} />,
    <SerieCard serieLista={"desejoVer/"} serieId={"1"} />,
    <SerieCard serieLista={"desejoVer/"}  serieId={"2"} />,
    <SerieCard serieLista={"desejoVer/"}  serieId={"3"} />,
    <SerieCard serieLista={"desejoVer/"} serieId={"1"} />,
    <SerieCard serieLista={"desejoVer/"}  serieId={"2"} />,
    <SerieCard serieLista={"desejoVer/"}  serieId={"3"} />,
    <SerieCard serieLista={"desejoVer/"} serieId={"1"} />,
    <SerieCard serieLista={"desejoVer/"}  serieId={"2"} />,
    <SerieCard serieLista={"desejoVer/"}  serieId={"3"} />,
  ]
  return (
 
    <ScreenModel  checkedItem={"wish"}  apelido={"Akemi"} titlePage={"Desejo ver"}>
     {
   series.length == 0 ? <EmptyInfo/> :  <Carousel> {series} </Carousel>
    }
    </ScreenModel>

 

   
  )
}

export default Wish;