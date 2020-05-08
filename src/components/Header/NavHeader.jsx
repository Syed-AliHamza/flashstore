import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="topbar" className="d-none d-lg-block">
          <div className="container m-auto clearfix">
            <div className="contact-info float-left">
              <span className="border-right pr-2">
                {" "}
                <i className="flaticon-call"></i>{" "}
                <a href="tel:0307-4190145"> (+92) 307-4190145</a>
              </span>
              <span className="pl-1">
                <i className="flaticon-envelope"></i>
                <a href="mailto:flashstore8563@gmail.com">
                  flashstore8563@gmail.com
                </a>
              </span>
            </div>
            <div className="social-links float-right">
              <span className=" border-right">
                <Link to="/store-location">
                  <i className="flaticon-placeholder"></i> Store Location
                </Link>
              </span>
              <span className="border-right">
                <Link to="/track-your-order">
                  <i className="fa fa-truck"></i> Track Your Order
                </Link>
              </span>
              <span className="">
                <Link to="/account/register">
                  <i className="flaticon-user-1"></i> Register
                </Link>
              </span>
              <span className="text-muted">or</span>
              <span className=" border-right">
                <Link to="/account/login">Sign in</Link>
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
