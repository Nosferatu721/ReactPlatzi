import React from "react";
import ReactDOM from "react-dom";
import Badge from "./components/Badge";
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
ReactDOM.render(
  <Badge
    firstName="Elkin"
    lastName="Torres"
    age="20"
    avatar="https://s.gravatar.com/avatar/1a7c5a12e5a46cca9ad5f5d20968ddc0?s=80"
  />,
  container
);
