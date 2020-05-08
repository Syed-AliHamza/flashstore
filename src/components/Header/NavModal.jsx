import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavModal extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="modal fade m-0 p-0"
          id="navbarSupportedContent"
          tabindex="-1"
          role="dialog"
          aria-labelledby="navbarSupportedContent"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content d-flex m-0 p-0">
              <div className="model-header p-0 m-0 text-center d-flex justify-content-between align-itmes-center">
                <Link to="/" className="border-right w-25 p-3">
                  <i className="fa fa-search"></i>
                </Link>
                <Link to="/" className="border-right w-25 p-3">
                  <i className="fa fa-search"></i>
                </Link>
                <Link to="/" className="border-right w-25 p-3">
                  <i className="fa fa-search"></i>
                </Link>
                <Link to="/" className="w-25 p-3">
                  <i className="fa fa-search"></i>
                </Link>
              </div>
              <div className="modal-body p-0 text-center d-flex justify-content-between align-itmes-center flex-column">
                <ul className="navbar-nav text-left">
                  <li className="nav-item border-bottom">
                    <Link to={"/"} className="nav-link px-3">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item border-bottom">
                    <Link to="/" className="nav-link px-3">
                      Catalog
                    </Link>
                  </li>
                  <li className="nav-item border-bottom">
                    <Link to="/" className="nav-link px-3">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item border-bottom">
                    <Link to="/" className="nav-link px-3">
                      Pages
                    </Link>
                  </li>
                  <li className="nav-item border-bottom">
                    <Link to="/" className="nav-link px-3">
                      Features
                    </Link>
                  </li>
                  <li className="nav-item border-bottom">
                    <Link to="/"
                      className="nav-link px-3"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Contuct Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="modal-footer p-0 m-0 text-center rounded-0 d-flex justify-content-center align-itmes-center">
                <Link to="/" className="w-25 p-2">
                  <i className="fa fa-search"></i>
                  <br /> Call
                </Link>
                <Link to="/" className="w-25 p-2">
                  <i className="fa fa-search"></i>
                  <br /> Contact
                </Link>
                <Link to="/" className="w-25 p-2">
                  <i className="fa fa-search"></i>
                  <br /> Store Info
                </Link>
                <Link to="/" className="w-25 p-2">
                  <i className="fa fa-search"></i>
                  <br /> Directions
                </Link>
                {/* <Link to="">
                  {" "}
                  <i className="fa fa-close "></i>
                  
                </Link>
                <Link to="" className="">
                  <i className="fa fa-close"></i>
                  
                </Link>
                <Link to="" className="">
                  <i className="fa fa-close"></i>
                 
                </Link>
                <Link to="" className="">
                  <i className="fa fa-close"></i>
                  
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div id="navbarSupportedContent" className="m-0 p-0 fade">
          <div className="container-fluid bg-light w-100 p-0">
            <div className="inner d-flex flex-column bg-white">
              <div className="header fixed-top px-2 py-0 m-0 text-center d-flex justify-content-between align-itmes-center">
                <Link to="/" className="border-right pr-3 pl-2 py-3">
                  <i className="fa fa-search"></i>
                </Link>
                <Link to="/" className="border-right pr-4 pl-2 py-3">
                  <i className="fa fa-search"></i>
                </Link>
                <Link to="/" className="border-right pr-4 pl-2 py-3">
                  <i className="fa fa-search"></i>
                </Link>
                <Link to="/" className="pr-3 pl-2 py-3">
                  <i className="fa fa-search"></i>
                </Link>
              </div>
              <div className="body">NavBody</div>
              <div className="footer fixed-bottom p-1 m-0 text-center d-flex justify-content-center align-itmes-center">
                <Link to="">
                  {" "}
                  <i className="fa fa-close "></i>
                  <br /> Call
                </Link>
                <Link to="" className="">
                  <i className="fa fa-close"></i>
                  <br /> Contact
                </Link>
                <Link to="" className="">
                  <i className="fa fa-close"></i>
                  <br /> Store Info
                </Link>
                <Link to="" className="">
                  <i className="fa fa-close"></i>
                  <br /> Directions
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}
