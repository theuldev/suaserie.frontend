import React, { useState } from "react";
import './Burger.css'



const Burger = (props) => {

//  Criando componetes mobile.

  return (
    <header className="">
     
     <div class="header-mobile">
      <div class="user-bar">
        <div class="user-wrapper">

          <div class="circle-user">

            <img src="../../public/images/user.png" alt="Foto do usuário"/>

          </div>

          <span class="nickname">Apelido</span>

        </div>
      </div>
      <button class="hamburger ">
        <div class="bar">

        </div>
      </button>
    </div>


    </header>
  )

};



export default Burger;