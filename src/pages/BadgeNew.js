import React, { Component } from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import Navbar from "../components/Navbar";
import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";

class BadgeNew extends Component {
  state = {
    form: {
      firstName: "FirstName",
      lastName: "LastName",
      email: "",
      jobTitle: "Frontend Enginer",
      twitter: "twitter",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value, // Agregar dato de input al form
      },
    });
    console.log(this.state);
  };

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
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                avatar="https://s.gravatar.com/avatar/1a7c5a12e5a46cca9ad5f5d20968ddc0?s=80"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
