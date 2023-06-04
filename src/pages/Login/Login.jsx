import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./Login.css";
import logos from "../../constants/logos";

// ícones:
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// Componentes:
import InputFloat from "../../components/InputFloat/InputFloat";

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
                    src={logos.logoLight}
                    alt="Projeto SóSeries"
                  />
                </div>
                <h1>Login</h1>
              </div>
              <form className="form_login">
                <InputFloat inputType="email" inputName="E-mail" />
                <InputFloat inputType="password" inputName="Senha" />

                <div className="password_recovery">
                  <a href="#">Esqueceu a senha?</a>
                </div>
                <div className="form-btn-login">
                  <button className="btn-login">
                    <span className="material-symbols-outlined">
                      <BsFillArrowRightCircleFill />
                    </span>
                  </button>
                </div>
                <div className="sign-up">
                  <span>
                    Ainda não possui nenhuma conta?{" "}
                    <Link className="sign-up-link" to={"/cadastro"}>
                      Crie uma nova conta
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
