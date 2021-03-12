import React from "react";
// Importar Imagen
import logo from "../images/logo.svg";
// Importar CSS
import "../components/style/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={logo} alt="Logo Conf" />
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://s.gravatar.com/avatar/1a7c5a12e5a46cca9ad5f5d20968ddc0?s=80"
            alt="Avatar"
          />
          <h1>
            Elkin <br /> Torres
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Frontend Enginer :3</h3>
          <div>@Nosferatu</div>
        </div>
        <div className="Badge__footer">
          <p>#PlatziConf</p>
        </div>
      </div>
    );
  }
}

export default Badge;
