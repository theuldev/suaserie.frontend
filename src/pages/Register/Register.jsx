import React from "react";
import { Helmet } from "react-helmet";
import './Register.css'
import logos from '../../constants/logos';
import images from '../../constants/images';


// ícones:
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Register = () => (

  <div className="body-register">
    <Helmet>
      <title>Só Séries - Cadastro</title>

    </Helmet>


    <div className="container">
      <div className="form-logo">
        <img
          src={logos.logoDark}
          alt="Projeto SóSeries"
        />
      </div>
      <div className="form">
        <form action="#">
          <div className="form-header">
            <h1>Cadastre-se <br /><span>É rápido e fácil.</span></h1>
            <div className="title"></div>
          </div>
          <div className="profile-pic">
            <div className="profile-input-form">
              <div className="wrapper-profile">
                <img
                  src={images.user}
                  alt="Foto do usuário"
                  id="photo"
                />
                <input type="file" id="file" required />
                <label htmlFor="file" id="uploadPicBtn">Escolha foto</label>
              </div>
            </div>
          </div>

          <div className="input-group">
            <div className="input-box">
              <label htmlFor="firstname">Primeiro Nome</label>
              <input
                id="firstname"
                type="text"
                name="firstname"
                placeholder="Primeiro nome"
                required
              />
            </div>

            <div className="input-box">
              <label htmlFor="lastname" >Ultimo Nome</label>
              <input
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Ultimo nome"
                required
              />
            </div>

            <div className="input-box">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="exemple@soseries.com"
                required
              />
            </div>

            <div className="input-box">
              <label htmlFor="apelido">Apelido</label>
              <input
                id="apelido"
                type="text"
                name="apelido"
                placeholder="Apelido"
                required
              />
            </div>

            <div className="input-box">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="* * * * * * * * * * * * *"
                required
              />
            </div>

            <div className="input-box">
              <label htmlFor="ConfirmPassword">Confirme sua Senha</label>
              <input
                id="ConfirmPassword"
                type="password"
                name="ConfirmPassword"
                placeholder="Confirme sua senha"
                required
              />
            </div>
          </div>

          <div className="continue-button">
            <button id="continue-btn">Criar Conta</button>
          </div>
          <div className="conexao">
            Já possui uma conta?
          
            <Link to={'/login'}   className="conexao-link"  >Conecte-se.</Link>
          </div>
        </form>
      </div>
    </div>

  </div>
);



export default Register;