import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

export default class Account extends Component {
  render() {
    return (
      <div>
        <div className="page-head_agile_info_w3l"></div>
        <div className="services-breadcrumb">
          <div className="agile_inner_breadcrumb">
            <div className="container">
              <ul className="w3_short">
                <li>
                  <Link to="/">Home</Link>
                  <i>|</i>
                </li>
                <li>Login / Create Account</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="main-content">
          <div className="container py-5">
            <div className="row">
              <div className="col-sm-6 col-xs-12 px-5">
                <Login />
              </div>
              <div className="col-sm-6 col-xs-12 px-5 register-or">
                <SignUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
