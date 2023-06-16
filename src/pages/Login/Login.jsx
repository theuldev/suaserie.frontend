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
import loginService from "../../services/loginservice";
const Login = () => {

  const [data, setData] = useState({Email:'',Senha:''});
  const handleCallback = (e) => {
   setData({[e.name]:e.target.value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

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
              <form className="form_login" onSubmit={onSubmit}>
                <div className="inputs">
                  <InputFloat
                    inputType="email"
                    inputName="Email"
                    placeholder="soseries@series.com"
                    value={data.Email}
                    parentCallback={handleCallback}
                  />
                  <InputFloat
                    inputType="password"
                    inputName="Senha"
                    placeholder="* * * * * * * * *"
                    value={data.Senha}
                    parentCallback={handleCallback}
                  />
                </div>

                <div className="password_recovery">
                  <LinkPage linkTo="/" linkText="Esqueceu a senha?" />
                </div>
                <div className="form-btn-login">
                  <button className="btn-login">
                    <FiArrowRight className="icon-login" />
                  </button>
                </div>

                <LinkPage
                  text={"Ainda não possui nenhuma conta?"}
                  linkText={"Crie uma nova conta!"}
                  linkTo={"/cadastro"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
