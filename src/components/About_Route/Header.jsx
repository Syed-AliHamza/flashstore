import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Header extends Component {
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
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
