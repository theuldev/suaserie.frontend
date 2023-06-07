import React from "react";
import { Helmet } from "react-helmet";
import "./Profile.css"
import {SlArrowRight } from "react-icons/sl"
import {IoArrowBackCircleSharp} from "react-icons/io5"
const Profile = () => (

  
  <div className="body-profile">
    <Helmet>SóSeries</Helmet>
    
    <div className="profile">
      <div className="profile-pic">
        <div className="wrapper-profile">
          <img
            src="../public/images/user.png"
            alt="Foto do usuário"
            id="photo"
          />
          <input type="file" id="file" />
          <label for="file" id="uploadPicBtn">Mudar foto</label>
        </div>

        <div className="profile-username">
          <span className="material-symbols-outlined"><SlArrowRight /></span>
          <span className="nickname">Apelido</span>
        </div>

        <button id="btn-back" onclick="goBack()">
          <span className="material-icons"><IoArrowBackCircleSharp/> </span>
          Voltar
        </button>
      </div>

      <div className="profile-info">
        <div className="info-boxes">
          <div className="info-box">
            <div className="text">
              <span className="profile-label">Nome completo:</span>
              <span className="profile-data">Iasmim Cristina</span>
            </div>

            <span className="material-icons"> settings </span>
          </div>
          <div className="info-box">
            <div className="text">
              <span className="profile-label">E-mail:</span>
              <span className="profile-data">exemplo@gmail.com</span>
            </div>
            <span className="material-icons"> settings </span>
          </div>
          <div className="info-box">
            <div className="text">
              <span className="profile-label">Apelido:</span>
              <span className="profile-data">Ias1234</span>
            </div>
            <span className="material-icons"> settings </span>
          </div>
        </div>
        <button id="change-password">
          <span className="material-icons"> lock </span>
          Mudar senha?
        </button>
      </div>
      <div className="profile-series">
        <button className="logout-button" id="logout">
          <span className="material-icons"> meeting_room </span>
          Sair
        </button>

        <div className="series">
          <span className="material-symbols-outlined" id="liked">
            sentiment_very_satisfied
          </span>
          <p>Favoritas → 05 series</p>
        </div>
        <div className="series">
          <span className="material-symbols-outlined" id="disliked">
            sentiment_very_dissatisfied
          </span>
          <p>Piores Séries → 09 series</p>
        </div>
        <div className="series">
          <span className="material-symbols-outlined" id="watched"> done_all </span>
          <p>Já Vistas → 09 series</p>
        </div>
        <div className="series">
          <span className="material-symbols-outlined" id="wish"> hotel_className </span>
          <p>Desejo Ver → 09 series</p>
        </div>

        <button className="delete-button">
          <span className="material-symbols-outlined"> delete </span>Deletar conta?
        </button>
      </div>
    </div>
  </div>
);

export default Profile;
