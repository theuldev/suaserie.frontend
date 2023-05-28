import React from "react";
import { Helmet } from "react-helmet";
import './Login.css'
import logos from '../../constants/logos';

// ícones:
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Login = () => (

  <div>
    <Helmet>
      <title>Só Séries - Login</title>

    </Helmet>
   
      <div className="container">
        <div className="row">

        </div>
        <div className="row">
          <div className="col-12">
            <div className="login_box">
              <div className="login_header">
                <div className="header-logo">
                  <img className="img-logo" src={logos.logoLight}
                    alt="Projeto SóSeries" />

                </div>
                <h1>Login</h1>
              </div>
              <form className="form_login">
                <div className="email-input-form">
                  <label className="email_label" for="email_input">E-mail</label>
                  <input className="email_input" type="email" placeholder="exemplo@gmail.com" required />
                </div>

                <div className="password-input-form">
                  <label className="password_label" for="password_input">Senha</label>
                  <input className="password_input" type="password" placeholder=" * * * * * * * * *" required />
                </div>
                <div className="password_recovery">
                  <a href="#">Esqueceu a senha?</a>
                </div>
                <div className="form-btn-login">
                  <button className="btn-login"><span className="material-symbols-outlined">
                    <BsFillArrowRightCircleFill />
                  </span></button>
                </div>
                <div className="sign-up">
                  <span>Ainda não possui nenhuma conta? <a href="/src/signup/signup.html">Crie uma nova
                    conta</a></span>
                </div>



              </form>

            </div>
          </div>

        </div>
      </div>
    


  </div>
);



export default Login;