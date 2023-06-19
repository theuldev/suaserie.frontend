import "./Header.css";

// ícones
import { BsFillPersonFill } from "react-icons/bs";
import { RiMovieLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
// Componentes:
import UserBar from "../UserBar/UserBar";
import logos from "../../../constants/logos";
import { useEffect, useState } from "react";
import { getInfo } from "../../../services/user/userService";

const Header = (props) => {
  const [userInfo, SetInfo] = useState({
    nickname: "",
    photo: "",
    lastname: "",
    email: "",
    name: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getInfo();
          console.log(user)
        if (user) {
          SetInfo(user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <header className="hdr-desktop">
      <div class="navbar">
        <nav>
          <div>
            <Link to={"/favoritas"} className="link">
              <span class="material-icons">
                {" "}
                <BsFillPersonFill />{" "}
              </span>{" "}
              <span className="header-item">Minhas listas</span>
            </Link>
          </div>
          <div>
            <Link to={"/series"} className="link">
              <span class="material-icons">
                {" "}
                <RiMovieLine />{" "}
              </span>
              <span className="header-item">Mais séries</span>
            </Link>
          </div>

          <div>
            <UserBar apelido={userInfo.nickname} userPic={userInfo.photo} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
