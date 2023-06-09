import React from "react";
import images from "../../../constants/images";
import './SideMenu.css'
import logos from "../../../constants/logos";
import UserBar from "../UserBar/UserBar";
import SideMenuItem from "../SideMenuItem/SideMenuItem";

// ícones:
import { MdOutlineSentimentVerySatisfied, MdDoneAll, MdOutlineHotelClass, MdOutlineSentimentVeryDissatisfied } from "react-icons/md";



const SideMenu = (props) => {

  // Dizer qual item checked do menu é.
  // O side bar item muda com um ID.


  return (
    <div className="side-menu">


      <UserBar apelido={props.apelido} image={props.imgUser} />



      <div className="side-bar-items">


        <span className="side-bar-items-title">Suas listas</span>
        <hr />

        <SideMenuItem linkTo={props.checkedItem == "liked" ? "" : "/favoritas"} isChecked={props.checkedItem == "liked" ? true : false} type="liked">
          Favoritas
          <MdOutlineSentimentVerySatisfied />
        </SideMenuItem>


        <SideMenuItem linkTo={props.checkedItem == "watched" ? "" : "/assistidas"} isChecked={props.checkedItem == "watched" ? true : false} type="watched">
          Já vistas
          <MdDoneAll />
        </SideMenuItem>
        

        <SideMenuItem linkTo={props.checkedItem == "wish" ? "" : "/desejoVer"} isChecked={props.checkedItem == "wish" ? true : false} type="wish">
          Desejo ver
          <MdOutlineHotelClass />
        </SideMenuItem>

        <SideMenuItem linkTo={props.checkedItem == "disliked" ? "" : "/piores"} isChecked={props.checkedItem == "disliked" ? true : false} type="disliked">
          Piores
          <MdOutlineSentimentVeryDissatisfied />
        </SideMenuItem>






        <img
          src={logos.logoLight}
          alt="Projeto SóSéries logomarca."
        />
      </div>
    </div>
  )

};



export default SideMenu;