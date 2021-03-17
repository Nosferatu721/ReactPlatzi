import React from "react";
import ReactDOM from "react-dom";
// Components
import Badges from "./pages/Badges";
//import BadgeNew from "./pages/BadgeNew";
// Styles
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

// const jsx = (
//   <div>
//     <h1>Hola, Soy Senku</h1>
//     <p>Soy cientifico en Dr. Stone</p>
//   </div>
// );

// const element = React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, "Hola, Soy Senku"),
//   React.createElement("p", {}, "Soy cientifico en Dr. Stone")
// );

const container = document.getElementById("app");

// ReactDOM.render(__que__, __donde__);
ReactDOM.render(<Badges />, container);
