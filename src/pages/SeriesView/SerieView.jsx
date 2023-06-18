import React, { useEffect, useState } from "react";
import "./SeriesView.css";
import ScreenModel from "../../components/General/ScreenModel/ScreenModel";
import SerieCard from "../../components/General/SerieCard/SerieCard";
import { getAllSeries } from "../../services/series/seriesService";
const SeriesView = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getAllSeries().then((result) => {
      setSeries(result);
    });
  }, []);

  const seriesMap = () => {
    return series.map((serie) => (
      <div className="list-item" key={serie.id}>
        <SerieCard serieLista={"series/"} serieId={serie.id} />
      </div>
    ));
  };

  return (
    <ScreenModel checkedItem={""} apelido={"Akemi"} titlePage={"Séries"}>
      <div className="list">{seriesMap()}</div>
    </ScreenModel>
  );
};

export default SeriesView;
