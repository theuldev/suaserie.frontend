import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./Login.css";
import logos from "../../constants/logos";

// ícones:
import { FiArrowRight } from "react-icons/fi";
import { Link, redirect } from "react-router-dom";
// Componentes:
import InputFloat from "../../components/General/InputFloat/InputFloat";
import userEvent from "@testing-library/user-event";
import LinkPage from "../../components/General/LinkPage/LinkPage";

import login from "../../services/login/loginService";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const handleCallback = (e) => {
    data[e.target.name] = e.target.value;
    setData({ ...data });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(data);

    navigate('/serie')
 
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
                    inputName="email"
                    placeholder="soseries@series.com"
                    value={data.email}
                    parentCallback={handleCallback}
                  />
                  <InputFloat
                    inputType="password"
                    inputName="password"
                    placeholder="* * * * * * * * *"
                    value={data.password}
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
