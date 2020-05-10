import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavModal extends Component {
  handleCompare = () => {
    alert("You have no products to compare");
  };
  render() {
    return (
      <React.Fragment>
        <div
          className="modal fade m-0 p-0"
          id="navbarSupportedContent"
          role="dialog"
          aria-labelledby="navbarSupportedContent"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content d-flex m-0 p-0">
              <div className="model-header p-3 m-0 text-center d-flex justify-content-between align-itmes-center">
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
              <div className="modal-body p-0 text-center d-flex justify-content-between align-itmes-center flex-column">
                <ul className="navbar-nav text-left">
                  <li className="nav-item border-bottom p-0">
                    <Link
                      to="/"
                      className="px-3 p-2 d-flex justify-content-between align-items-center"
                    >
                      Value of the Day
                    </Link>
                  </li>
                  <li className="nav-item border-bottom p-0">
                    <Link
                      to="/"
                      className="px-3 p-2 d-flex justify-content-between align-items-center"
                    >
                      Top 100 Offers
                    </Link>
                  </li>
                  <li className="nav-item border-bottom p-0">
                    <Link
                      to="/"
                      className="px-3 p-2 d-flex justify-content-between align-items-center"
                    >
                      New Arrivals
                    </Link>
                  </li>
                  <li className="nav-item border-bottom p-0">
                    <Link
                      to="/"
                      className="px-3 p-2 d-flex justify-content-between align-items-center"
                    >
                      TV & Audio
                    </Link>
                  </li>
                  <li className="nav-item border-bottom p-0">
                    <Link
                      to="/"
                      className="px-3 p-2 d-flex justify-content-between align-items-center"
                    >
                      Gadgets
                    </Link>
                  </li>
                  <li className="nav-item border-bottom p-0">
                    <Link
                      to="/"
                      className="px-3 p-2 d-flex justify-content-between align-items-center"
                    >
                      All in one
                    </Link>
                  </li>
                  <li className="nav-item border-bottom p-0">
                    <Link
                      to="/"
                      className="px-3 p-2 d-flex justify-content-between align-items-center"
                    >
                      Accessories
                    </Link>
                  </li>
                  <li className="nav-item border-bottom p-0">
                    <Link
                      to="/"
                      className="px-3 p-2 d-flex justify-content-between align-items-center"
                    >
                      Laptop and Computers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="modal-footer p-0 m-0 text-center rounded-0 d-flex justify-content-center align-itmes-center">
                <span className="p-1">
                  <Link to="/store-location">
                    <i className="flaticon-call-1"></i>
                    <br />
                    Contact Us
                  </Link>
                </span>
                <span className="p-1">
                  <Link to="/store-location">
                    <i className="flaticon-placeholder"></i>
                    <br /> Store Location
                  </Link>
                </span>
                <span className="p-1">
                  <Link to="/track-your-order">
                    <i className="flaticon-tracking"></i>
                    <br />
                    Track Your Order
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
