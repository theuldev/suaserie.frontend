import { React, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./Register.css";
import logos from "../../constants/logos";
import images from "../../constants/images";



import { Link } from "react-router-dom";
// Componentes:
import InputFloat from "../../components/InputFloat/InputFloat";



const Register = () => {

  // Lógica do preview da imagem escolhida
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);



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


                  {imageUrl && selectedImage ? (<img src={imageUrl} alt={selectedImage.name} id="photo" />) : (<img src={images.user} alt="Foto do usuário" id="photo" />)
                  }




                  <input type="file" id="file"
                    accept="image/*"
                    onChange={dynammicPhoto}
                    required />
                  <label htmlFor="file" id="uploadPicBtn">
                    Escolha foto
                  </label>
                </div>
              </div>
            </div>

            <div className="input-group">

              <div className="input-box">
                <InputFloat inputType="text" inputName="Primeiro Nome"
                  placeholder="Primeiro Nome" />
              </div>


              <div className="input-box">
                <InputFloat inputType="text" inputName="Ultimo Nome"
                  placeholder="Ultimo Nome" />
              </div>



              <div className="input-box">
                <InputFloat
                  inputType="email"
                  inputName="E-mail"
                  placeholder="soseries@series.com"
                />
              </div>


              <div className="input-box">
                <InputFloat inputType="text" inputName="Apelido" placeholder="Apelido" />
              </div>



              <div className="input-box">
                <InputFloat inputType="password" id="input-password" inputName="Senha" placeholder="* * * * * * * * *" />
              </div>




              <div className="input-box">
                <InputFloat inputType="password" inputName="Confirme sua Senha" placeholder="Confirme sua Senha" />
              </div>

            </div>
            <div className="continue-button">
              <button id="continue-btn">Criar Conta</button>
            </div>
            <div className="conexao">
            <span>
              Já possui uma conta? {" "}

            </span>
              <Link to={"/login"} className="conexao-link">
                Conecte-se.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Register;
