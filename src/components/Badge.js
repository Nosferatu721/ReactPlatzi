import React from "react";
// Importar Imagen
import logo from "../images/logo.svg";
// Importar CSS
import "../components/style/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="">
          <img src={logo} alt="Logo Conf" />
        </div>
        <div className="">
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            Elkin <br /> Torres
          </h1>
        </div>
        <div className="">
          <p>Frontend Enginer :3</p>
          <p>@Nosferatu</p>
        </div>
        <div className="">
          <p>#PlatziConf</p>
        </div>
      </div>
    );
  }
}

export default Badge;
