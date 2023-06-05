import {React} from "react";
import { Helmet } from "react-helmet";
import "./Register.css";
import logos from "../../constants/logos";
import images from "../../constants/images";

// ícones:
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import InputFloat from "../../components/InputFloat/InputFloat";


const Register = () => (
  <div className="body-register">
    <Helmet>
      <title>Só Séries - Cadastro</title>
    </Helmet>

    <div className="container">
      <div className="form-logo">
        <img src={logos.logoDark} alt="Projeto SóSeries" />
      </div>
      <div className="form">
        <form action="#">
          <div className="form-header">
            <h1>
              Cadastre-se <br />
              <span>É rápido e fácil.</span>
            </h1>
            <div className="title"></div>
          </div>
          <div className="profile-pic">
            <div className="profile-input-form">
              <div className="wrapper-profile">
                <img src={images.user} alt="Foto do usuário" id="photo" />
                <input type="file" id="file" required />
                <label htmlFor="file" id="uploadPicBtn">
                  Escolha foto
                </label>
              </div>
            </div>
          </div>

          <div className="input-group">
            <div className="input-box">
              <InputFloat inputType="Text" inputName="Primeiro Nome" />
            </div>

            <div className="input-box">
              <InputFloat inputType="Text" inputName="Ultimo Nome" />
            </div>

            <div className="input-box">
              <InputFloat
                inputType="Email"
                inputName="E-mail"
              />
            </div>
            <div className="input-box">
                 <InputFloat inputType="Text" inputName="Apelido" />
            </div>

            <div className="input-box">
                 <InputFloat inputType="Password" id="input-password" inputName="Senha" />
            </div>

            <div className="input-box">
    
                 <InputFloat inputType="Password" inputName="Confirme sua Senha" />
            </div>
          </div>
          <div className="continue-button">
            <button id="continue-btn">Criar Conta</button>
          </div>
          <div className="conexao">
            Já possui uma conta?
            <Link to={"/login"} className="conexao-link">
              Conecte-se.
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Register;
