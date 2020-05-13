import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TrackYourOrder extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-head_agile_info_w3l"></div>
        <div className="services-breadcrumb">
          <div className="agile_inner_breadcrumb">
            <div className="container-fluid">
              <ul className="w3_short">
                <li>
                  <Link to="/">Home</Link>
                  <i>|</i>
                </li>
                <li>Track My Order</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid m-auto py-5">
          <p className="pb-4 text-center h5">
            Track My Order
          </p>
          <div className="form p-0 m-auto col-12 col-md-5 col-lg-6 col-xl-6 w-100 d-flex justify-content-center">
            <form className="input-group search" action="/" method="get">
              <input
                className="form-control rounded-0 "
                type="text"
                placeholder="Tracking Number"
              />
              <button type="submit" className="btn px-4 rounded-0">
                Track
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
