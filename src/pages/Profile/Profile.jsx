import { React, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./Profile.css";
import { SlArrowRight } from "react-icons/sl";
import { IoArrowBackOutline, IoCheckmarkDoneSharp } from "react-icons/io5";
import { BsFillDoorOpenFill, BsTrash } from "react-icons/bs";
import { BiHappyAlt } from "react-icons/bi";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { MdOutlineHotelClass } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import images from "../../constants/images";

const Profile = () => {
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
    <div className="body-profile">
      <Helmet>SóSeries</Helmet>

      <div className="profile">
        <div className="profile-pic">
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
            <label for="file" id="uploadPicBtn">
              Mudar foto
            </label>
          </div>

          <div className="profile-username">
            <span className="material-symbols-outlined">
              <SlArrowRight />
            </span>
            <span className="nickname">Apelido</span>
          </div>

          <button id="btn-back" onclick="goBack()">
            <span className="material-icons">
              <IoArrowBackOutline  />{" "}
            </span>
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
            <span className="material-icons">
              <AiFillLock className="door-icon" />
            </span>
            Mudar senha?
          </button>
        </div>
        <div className="profile-series">
          <button className="logout-button" id="logout">
            <span className="material-icons">
              <BsFillDoorOpenFill />
            </span>
            Sair
          </button>

          <div className="series">
            <span className="material-symbols-outlined" id="liked">
              <BiHappyAlt />
            </span>
            <p>Favoritas → 05 series</p>
          </div>
          <div className="series">
            <span className="material-symbols-outlined" id="disliked">
              <RiEmotionUnhappyLine />
            </span>
            <p>Piores Séries → 09 series</p>
          </div>
          <div className="series">
            <span className="material-symbols-outlined" id="watched">
              <IoCheckmarkDoneSharp />
            </span>
            <p>Já Vistas → 09 series</p>
          </div>
          <div className="series">
            <span className="material-symbols-outlined" id="wish">
              <MdOutlineHotelClass />
            </span>
            <p>Desejo Ver → 09 series</p>
          </div>

          <button className="delete-button">
            <span className="material-symbols-outlined">
              {" "}
              <BsTrash />{" "}
            </span>
            Deletar conta?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
