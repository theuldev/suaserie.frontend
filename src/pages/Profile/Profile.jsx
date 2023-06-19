import { React, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./Profile.css";

// ícones:
import { SlArrowRight } from "react-icons/sl";
import { IoArrowBackOutline, IoCheckmarkDoneSharp } from "react-icons/io5";
import { BsFillDoorOpenFill, BsTrash } from "react-icons/bs";
import { BiHappyAlt } from "react-icons/bi";
import { MdOutlineSentimentVeryDissatisfied } from "react-icons/md";
import { MdOutlineHotelClass } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { removeAuth } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import {
  deleteUser,
  getAllSeriesFav,
  getAllSeriesWatch,
  getAllSeriesWish,
  getAllSeriesDisliked,
} from "../../services/user/userService";
import { changeToBase64Image } from "../../services/user/userService";
// Imagens:
import images from "../../constants/images";
import ButtonNormal from "../../components/General/ButtonNormal/ButtonNormal";
import { getInfo } from "../../services/user/userService";
const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [userInfo, SetInfo] = useState({
    nickname: "",
    photo: "",
    lastname: "",
    email: "",
    name: "",
  });
  const [countFav, SetFav] = useState();
  const [countDisliked, SetcountDisliked] = useState();
  const [countWish, SetWish] = useState();
  const [countWatch, SetWatch] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getInfo();

        if (user) {
          SetInfo(user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    getAllSeriesFav().then((result) => {
      console.log(result);
      const parsed = result;
      SetFav(Object.keys(parsed).length);
      console.log(countFav);
    });
    getAllSeriesWatch().then((result) => {
      console.log(result);
      const parsed = result;
      SetWatch(Object.keys(parsed).length);
      console.log(countFav);
    });
    getAllSeriesDisliked().then((result) => {
      console.log(result);
      const parsed = result;
      SetcountDisliked(Object.keys(parsed).length);
      console.log(countFav);
    });
    getAllSeriesWish().then((result) => {
      console.log(result);
      const parsed = result;
      SetWish(Object.keys(parsed).length);
      console.log(countFav);
    });
  }, []);

  function dynammicPhoto(e) {
    setSelectedImage(e.target.files[0]);
  }
  function Delete() {
    var confirm = confirm("Tem certeza de que deseja excluir sua conta?");
    if (confirm) {
      deleteMe();
    }
  }
  const deleteMe = async () => {
    try {
      var response = await deleteUser();
      if (response) removeAuth();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const goLogOut = () => {
    removeAuth();
    navigate("/");
  };

  // Página Profile incompleta. + Versão Mobile dos componentes ainda não feitos.

  return (
    <div className="body-profile">
      <Helmet>Só Séries - Perfil</Helmet>

      <div className="profile">
        <div className="profile-pic">
          <div className="wrapper-profile">
            {imageUrl && selectedImage ? (
              <img src={imageUrl} alt={selectedImage.name} id="photo" />
            ) : (
              <img src={userInfo.photo} alt="Foto do usuário" id="photo" />
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
            <span className="nickname">{userInfo.nickname}</span>

            <div id="settings-nickname">
              <FiSettings />
            </div>
          </div>

          <ButtonNormal
            bckg={"#ffd86d"}
            color={"#242629"}
            text={"Voltar"}
            classId={"voltar"}
            icon={<IoArrowBackOutline />}
            link=""
          />
        </div>

        <div className="profile-info">
          <div className="info-boxes">
            <div className="info-box">
              <div className="text">
                <span className="profile-label">Nome completo:</span>
                <span className="profile-data">
                  {userInfo.name} {userInfo.lastname}{" "}
                </span>
              </div>

              <span className="material-icons">
                {" "}
                <FiSettings />{" "}
              </span>
            </div>
            <div className="info-box">
              <div className="text">
                <span className="profile-label">E-mail:</span>
                <span className="profile-data">{userInfo.email}</span>
              </div>
              <span className="material-icons">
                {" "}
                <FiSettings />{" "}
              </span>
            </div>
          </div>
          <div className="change-pass">
            <ButtonNormal
              bckg={"#242629"}
              color={"#f1f1f1"}
              classId={"senha"}
              icon={<AiFillLock />}
              text={"Mudar senha?"}
              onClick={goLogOut}
            />
          </div>
        </div>

        <div className="profile-series">
          <div className="log-out-exit">
            <ButtonNormal
              bckg={"#242629"}
              color={"red"}
              classId={"sair"}
              icon={<BsFillDoorOpenFill />}
              text={"Sair"}
              onClick={goLogOut}
            />
          </div>

          <div className="series">
            <span className="material-symbols-outlined" id="liked">
              <BiHappyAlt />
            </span>
            <p>Favoritas → {countFav} series</p>
          </div>
          <div className="series">
            <span className="material-symbols-outlined" id="disliked">
              <MdOutlineSentimentVeryDissatisfied />
            </span>
            <p>Piores Séries → {countDisliked} series</p>
          </div>
          <div className="series">
            <span className="material-symbols-outlined" id="watched">
              <IoCheckmarkDoneSharp />
            </span>
            <p>Já Vistas → {countWatch} series</p>
          </div>
          <div className="series">
            <span className="material-symbols-outlined" id="wish">
              <MdOutlineHotelClass />
            </span>
            <p>Desejo Ver → {countWish} series</p>
          </div>

          <ButtonNormal
            bckg={"red"}
            color={"#242629"}
            classId={"deletar"}
            icon={<BsTrash />}
            text={"Deletar conta?"}
            onClick={Delete}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
