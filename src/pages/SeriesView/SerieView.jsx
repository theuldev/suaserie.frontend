import React, { useEffect, useState } from "react";
import "./SeriesView.css";
import ScreenModel from "../../components/General/ScreenModel/ScreenModel";
import SerieCard from "../../components/General/SerieCard/SerieCard";
import getAllSeries from "../../services/series/seriesService";
import api from "../../services/api";

const SeriesView = () => {
  const [series, setSeries] = useState([]);


  useEffect(() => {
    getAllSeries().then((result)=> {
      console.log(result)
      setSeries(result)
    })
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
      <div className="list">
        {series.map((serie) => (
          <div className="list-item" key={serie.id}>
            <SerieCard
              title={serie.name}
              serieLista={"series/"}
              serieId={serie.id}
              episodes={serie.episodes}
              seasons={serie.seasons}
            />
          </div>
        ))}
      </div>
    </ScreenModel>
  );
};

export default SeriesView;
