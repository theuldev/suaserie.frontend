

import "./BigButton.css";
import { Link } from "react-router-dom";

const BigButton = (props) => {
  

  return (
    
    <button className="button-wrapper"   >

    <Link to={props.linkTo}>
        {props.children}
    </Link>

      </button>
  );
};

export default BigButton;
