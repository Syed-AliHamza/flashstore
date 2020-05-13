import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="topbar" className="">
          <div className="container-fluid w-100 m-auto clearfix">
            <div className="contact-info float-left d-none d-lg-block">
              <span className="border-right pr-2">
                <i className="flaticon-call-1"></i>
                <a href="tel:0307-4190145"> (+92) 307-4190145</a>
              </span>
              <span className="pl-1">
                <i className="flaticon-envelope"></i>
                <a href="mailto:flashstore8563@gmail.com">
                  flashstore8563@gmail.com
                </a>
              </span>
            </div>
            <div className="social-links float-right d-flex align-items-center">
              <span className="d-none d-md-block d-lg-block border-right">
                <Link to="/store-location">
                  <i className="flaticon-placeholder"></i> Store Location
                </Link>
              </span>
              <span className="d-none d-md-block d-lg-block border-right">
                <Link to="/track-your-order">
                  <i className="flaticon-tracking"></i> Track Your Order
                </Link>
              </span>
              <span className="">
                <Link to="/account/register">
                  <i className="flaticon-user-1"></i> Register
                </Link>
              </span>
              <span className="text-muted">or</span>
              <span className=" border-right">
                <Link to="/account/login">
                  <i className="flaticon-user-1"></i>Sign in
                </Link>
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
