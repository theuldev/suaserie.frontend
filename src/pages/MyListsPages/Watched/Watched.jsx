import { React, useEffect, useState } from "react";
import ScreenModel from "../../../components/General/ScreenModel/ScreenModel";

import SerieCard from "../../../components/General/SerieCard/SerieCard";
import Carousel from "../../../components/General/Carousel/Carousel";
import EmptyInfo from "../../../components/General/EmptyInfo/EmptyInfo";
import { getAllSeriesWatch } from "../../../services/user/userService";

const Watched = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getAllSeriesWatch().then((result) => {
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
      checkedItem={"watched"}
      apelido={"Akemi"}
      titlePage={"Assistidas"}
    >
      {series.length === 0 ? (
        <EmptyInfo />
      ) : (
        <Carousel> {seriesMap()} </Carousel>
      )}
    </ScreenModel>
  );
};

export default Watched;
