import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavModal from "./NavModal";

export default class Nav extends Component {
  handleCompare = () => {
    alert("You have no products to compare");
  };
  render() {
    return (
      <React.Fragment>
        <nav className="sticky-top navbar-expand-md navbar-light flash-navbar m-0 p-0 text-center">
          <div className="container-fluid m-auto clearfix">
            <div className="row d-flex align-items-center justify-content-between py-3 p-0 m-0">
              <div className="col-12 col-md-3 col-lg-2 col-xl-2 p-0 d-none d-lg-block d-md-block m-0">
                <Link to="/">
                  <img
                    src="/images/logo_4.png"
                    className="navbar-brand p-0 m-0"
                    alt="Flash Store"
                  />
                </Link>
              </div>
              <div className="col-2 col-sm-2 d-block d-lg-none d-md-none w-100">
                <Link
                  to="/"
                  className="navbar-toggler rounded-0"
                  type="button"
                  data-toggle="modal"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </Link>
              </div>
              <div className="form col-10 col-md-5 col-lg-7 col-xl-7 w-100">
                <form
                  className="input-group search"
                  action="/search"
                  method="get"
                >
                  <input
                    className="form-control rounded-0 "
                    type="search"
                    placeholder="Search for Products"
                    aria-label="Search"
                    id="mysearch"
                  />
                  <button type="submit" className="btn px-4 rounded-0">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="header-icons p-0 col-3 col-lg-2 d-none d-md-block">
                <div className="header-icon p-0 m-0 d-flex">
                  <Link to="/" onClick={this.handleCompare}>
                    <i className="flaticon-repeat-button">
                      <span className="">0</span>
                    </i>
                  </Link>
                  <Link to="/wishlist">
                    <i className="flaticon-heart">
                      <span className="">4</span>
                    </i>
                  </Link>
                  <Link to="/checkout">
                    <i className="flaticon-shopping-bag">
                      <span className="notif">10</span>
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <NavModal />
      </React.Fragment>
    );
  }
}
