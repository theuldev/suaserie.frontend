import React, { useEffect, useState } from "react";
import "./SeriesView.css";
import ScreenModel from "../../components/General/ScreenModel/ScreenModel";
import SerieCard from "../../components/General/SerieCard/SerieCard";
import seriesService from "../../services/series/seriesService";

const SeriesView = async () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    try {
      const seriesArray = await seriesService.getAllSeries();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const series = [
  //   <div className='list-item'>
  //     <SerieCard serieLista={"series/"} serieId={"1"} />
  //   </div>,
  //   <div className='list-item'>
  //     <SerieCard serieLista={"series/"} serieId={"2"} />
  //   </div>,
  //   <div className='list-item'>
  //     <SerieCard serieLista={"series/"} serieId={"3"} />
  //   </div>,
  //   <div className='list-item'>
  //     <SerieCard serieLista={"series/"} serieId={"4"} />
  //   </div>,
  //   <div className='list-item'>
  //     <SerieCard serieLista={"series/"} serieId={"1"} />
  //   </div>,
  //   <div className='list-item'>
  //     <SerieCard serieLista={"series/"} serieId={"2"} />
  //   </div>,
  //   <div className='list-item'>
  //     <SerieCard serieLista={"series/"} serieId={"3"} />
  //   </div>,
  //   <div className='list-item'>
  //     <SerieCard serieLista={"series/"} serieId={"4"} />
  //   </div>,
  //   <div className='list-item'>
  //     <SerieCard serieLista={"series/"} serieId={"1"} />
  //   </div>,
  //   <div className='list-item'>
  //     <SerieCard serieLista={"series/"} serieId={"2"} />
  //   </div>,
  //   <div className='list-item'>
  //     <SerieCard serieLista={"series/"} serieId={"3"} />
  //   </div>,
  //   <div className='list-item'>
  //     <SerieCard serieLista={"series/"} serieId={"4"} />
  //   </div>,

  // ]

  return (
    <ScreenModel checkedItem={""} apelido={"Akemi"} titlePage={"Séries"}>
      <div className="list"></div>
    </ScreenModel>
  );
};

export default SeriesView;
