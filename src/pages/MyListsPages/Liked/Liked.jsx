import { React, useState, useEffect } from "react";
import ScreenModel from "../../../components/General/ScreenModel/ScreenModel";

import SerieCard from "../../../components/General/SerieCard/SerieCard";
import Carousel from "../../../components/General/Carousel/Carousel";
import EmptyInfo from "../../../components/General/EmptyInfo/EmptyInfo";
import { getAllSeriesFav } from "../../../services/user/userService";

const Liked = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getAllSeriesFav().then((result) => {
      console.log(result);
      setSeries(result);
    });
  }, []);
  const seriesMap = () => {
    return series.map((serie) => (
      <SerieCard serieLista={"assistidas/"} serieId={serie.id} />
    ));
  };
  return (
    <ScreenModel
      checkedItem={"liked"}
      apelido={"Akemi"}
      titlePage={"Favoritas"}
    >
      {series.length == 0 ? <EmptyInfo /> : <Carousel>  {seriesMap()} </Carousel>}
    </ScreenModel>
  );
};

export default Liked;
