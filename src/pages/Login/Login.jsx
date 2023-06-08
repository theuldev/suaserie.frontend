import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./Login.css";
import logos from "../../constants/logos";

// ícones:
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
// Componentes:
import InputFloat from "../../components/General/InputFloat/InputFloat";
import userEvent from "@testing-library/user-event";
import LinkPage from "../../components/General/LinkPage/LinkPage";

const Login = () => {


  return (
    <div className="body-login">
      <Helmet>
        <title>Só Séries - Login</title>
      </Helmet>

      <div className="container-login">
        <div className="row"></div>
        <div className="row">
          <div className="col-12">
            <div className="login_box">
              <div className="login_header">
                <div className="header-logo-login">
                  <img
                    className="img-logo-login"
                    src={logos.logoDark}
                    alt="Projeto SóSeries"
                  />
                </div>
                <h1>Login</h1>
              </div>
              <form className="form_login">

                <div className="inputs">

                  <InputFloat
                    inputType="email"
                    inputName="E-mail"
                    placeholder="soseries@series.com"

                  />
                  <InputFloat
                    inputType="password"
                    inputName="Senha"
                    placeholder="* * * * * * * * *"
                  />

                </div>

                <div className="password_recovery">
                  <a href="#">Esqueceu a senha?</a>
                </div>
                <Link className="form-btn-login" to={"/series"}>


                  <button className="btn-login">

                    <FiArrowRight className="icon-login" />


                  </button>

                </Link>


                <LinkPage text={"Ainda não possui nenhuma conta?"} linkText={"Crie uma nova conta!"} linkTo={"/cadastro"} />




              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
