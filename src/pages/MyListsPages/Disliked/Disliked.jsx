import Carousel from "../../../components/General/Carousel/Carousel";
import EmptyInfo from "../../../components/General/EmptyInfo/EmptyInfo";

import { React, useEffect, useState } from "react";
import ScreenModel from "../../../components/General/ScreenModel/ScreenModel";

import SerieCard from "../../../components/General/SerieCard/SerieCard";
import { getAllSeriesDisliked } from "../../../services/user/userService";

const Disliked = () => {
  const [series, setSeries] = useState([]);

  // const [userInfo, SetInfo] = useState({
  //   nickname: "",
  //   photo: "",
  //   lastname: "",
  //   email: "",
  //   name: "",
  // });


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const user = await getInfo();

  //       if (user) {
  //         SetInfo(user);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
   
  // }, []);



  useEffect(() => {
    getAllSeriesDisliked().then((result) => {
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
      checkedItem={"disliked"}
      apelido={"Akemi"}
      titlePage={"Piores"}
    >
      {series.length == 0 ? (
        <EmptyInfo />
      ) : (
        <Carousel> {seriesMap()} </Carousel>
      )}
    </ScreenModel>
  );
};

export default Disliked;
