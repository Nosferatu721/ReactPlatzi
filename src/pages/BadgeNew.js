import React, { Component } from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import Navbar from "../components/Navbar";
import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";

class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Elkin"
                lastName="Torres"
                age="20"
                avatar="https://s.gravatar.com/avatar/1a7c5a12e5a46cca9ad5f5d20968ddc0?s=80"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
