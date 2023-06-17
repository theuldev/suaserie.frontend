import { React, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./Register.css";
import logos from "../../constants/logos";
import images from "../../constants/images";

import { Link } from "react-router-dom";
// Componentes:
import InputFloat from "../../components/General/InputFloat/InputFloat";
import LinkPage from "../../components/General/LinkPage/LinkPage";

const Register = () => {
  // Lógica do preview da imagem escolhida
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

   const [data, setData] = useState({ email: "", password: "",name: "",nickname:"",lastname:"" });
  const handleCallback = (e) => {
    data[e.target.name] = e.target.value;
    setData({ ...data });
  };

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  function dynammicPhoto(e) {
    setSelectedImage(e.target.files[0]);
  }

  return (
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
                  {imageUrl && selectedImage ? (
                    <img src={imageUrl} alt={selectedImage.name} id="photo" />
                  ) : (
                    <img src={images.user} alt="Foto do usuário" id="photo" />
                  )}

                  <input
                    type="file"
                    id="file"
                    accept="image/*"
                    onChange={dynammicPhoto}
                    required
                  />
                  <label htmlFor="file" id="uploadPicBtn">
                    Escolha foto
                  </label>
                </div>
              </div>
            </div>

            <div className="input-group">
              <div className="input-box">
                <InputFloat
                  inputType="text"
                  name="Primeiro Nome"
                  placeholder="Primeiro Nome"
                  inputName="name"
                  parentCallback={handleCallback}
                />
              </div>

              <div className="input-box">
                <InputFloat
                  inputType="text"
                  name="Ultimo Nome"
                  placeholder="Ultimo Nome"
                  inputName="lastname"
                  parentCallback={handleCallback}
                />
              </div>

              <div className="input-box">
                <InputFloat
                  inputType="email"
                  name="E-mail"
                  placeholder="soseries@series.com"
                  inputName="email"
                  parentCallback={handleCallback}
                />
              </div>

              <div className="input-box">
                <InputFloat
                  inputType="text"
                  name="Apelido"
                  placeholder="Apelido"
                  inputName="nickname"
                  parentCallback={handleCallback}
                />
              </div>

              <div className="input-box">
                <InputFloat
                  inputType="password"
                  name="Senha"
                  placeholder="* * * * * * * * *"
                  inputName="password"
                  parentCallback={handleCallback}
                />
              </div>

              <div className="input-box">
                <InputFloat
                  inputType="password"
                  inputName="Confirme sua Senha"
                  placeholder="Confirme sua Senha"
                />
              </div>
            </div>
            <div className="continue-button">
              <button id="continue-btn">Criar Conta</button>
            </div>

            <LinkPage
              text={"Já possui uma conta?"}
              linkTo={"/login"}
              linkText={"Conecte-se!"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
