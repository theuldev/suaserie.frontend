
import "./Header.css";


// ícones
import { BsFillPersonFill } from "react-icons/bs";
import { RiMovieLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import UserBar from "../UserBar/UserBar";
import logos from "../../../constants/logos";



const Header = () => {


  return (
    <header>

      <div class="navbar">
        <nav>

    

          <div>

            <Link className="link">
              <span class="material-icons">  <BsFillPersonFill />    </span> <span className="header-item">Minhas listas</span>

            </Link>

          </div>
          <div>
            <Link className="link">
              <span class="material-icons"> <RiMovieLine /> </span>
              <span className="header-item">Mais séries</span>
            </Link>
          </div>

          <div >
            <UserBar apelido={"Iasmim"} />
          </div>
        </nav>
      </div>
    </header>

  );
};

export default Header;
