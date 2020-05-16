import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Carousel extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          {/* <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol> */}
          <div className="carousel-inner">
            {/* <div className="sidebar container-fluid m-auto d-none d-sm-block">
              <div className="row p-0 w-100 m-0">
                <ul className="col-5 col-md-4 col-lg-3 col-xl-2 p-0 py-3 m-0 bg-white w-100 h-100">
                  <li className="dropdown-item p-0 dropdown dropright">
                    <Link
                      to="/"
                      className="px-3 d-flex justify-content-between align-items-center"
                      id="navbardrop"
                      data-toggle="dropdown"
                    >
                      All in one
                      <i className="fa fa-chevron-right icon-right"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu border-0 rounded-0 p-0">
                      <ul className="p-0 py-3 m-0 border-0 bg-white h-100">
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="dropdown-item p-0 dropdown dropright">
                    <Link
                      to="/"
                      className="px-3 d-flex justify-content-between align-items-center"
                      id="navbardrop"
                      data-toggle="dropdown"
                    >
                      Gadgets
                      <i className="fa fa-chevron-right icon-right"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu1 border-0 rounded-0 p-0">
                      <ul className="p-0 py-3 m-0 border-0 bg-white h-100">
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="dropdown-item p-0 dropdown dropright">
                    <Link
                      to="/"
                      className="px-3 d-flex justify-content-between align-items-center"
                      id="navbardrop"
                      data-toggle="dropdown"
                    >
                      Accessories
                      <i className="fa fa-chevron-right icon-right"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu2 border-0 rounded-0 p-0">
                      <ul className="p-0 py-3 m-0 border-0 bg-white h-100">
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="dropdown-item p-0 dropdown dropright">
                    <Link
                      to="/"
                      className="px-3 d-flex justify-content-between align-items-center"
                      id="navbardrop"
                      data-toggle="dropdown"
                    >
                      Gaming
                      <i className="fa fa-chevron-right icon-right"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu3 rounded-0 p-0 py-3">
                      <li className="dropdown-item p-0">
                        <Link
                          to="/"
                          className="px-3 d-flex justify-content-between align-items-center"
                        >
                          PlayStation Controllers
                        </Link>
                      </li>
                      <li className="dropdown-item p-0">
                        <Link
                          to="/"
                          className="px-3 d-flex justify-content-between align-items-center"
                        >
                          XBOX Controllers
                        </Link>
                      </li>
                    </div>
                  </li>
                  <li className="dropdown-item p-0 dropdown dropright">
                    <Link
                      to="/"
                      className="px-3 d-flex justify-content-between align-items-center"
                      id="navbardrop"
                      data-toggle="dropdown"
                    >
                      Laptop and Computers
                      <i className="fa fa-chevron-right icon-right"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu4 rounded-0 p-0 py-3">
                      <li className="dropdown-item p-0">
                        <Link
                          to="/"
                          className="px-3 d-flex justify-content-between align-items-center"
                        >
                          Laptops
                        </Link>
                      </li>
                      <li className="dropdown-item p-0">
                        <Link
                          to="/"
                          className="px-3 d-flex justify-content-between align-items-center"
                        >
                          Computer
                        </Link>
                      </li>
                    </div>
                  </li>
                  <li className="dropdown-item p-0 dropdown dropright">
                    <Link
                      to="/"
                      className="px-3 d-flex justify-content-between align-items-center"
                      id="navbardrop"
                      data-toggle="dropdown"
                    >
                      Value of the Day
                      <i className="fa fa-chevron-right icon-right"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu5 border-0 rounded-0 p-0">
                      <ul className="p-0 py-3 m-0 border-0 bg-white h-100">
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="dropdown-item p-0 dropdown dropright">
                    <Link
                      to="/"
                      className="px-3 d-flex justify-content-between align-items-center"
                      id="navbardrop"
                      data-toggle="dropdown"
                    >
                      Top 100 Offers
                      <i className="fa fa-chevron-right icon-right"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu6 border-0 rounded-0 p-0">
                      <ul className="p-0 py-3 m-0 border-0 bg-white h-100">
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="dropdown-item p-0 dropdown dropright">
                    <Link
                      to="/"
                      className="px-3 d-flex justify-content-between align-items-center"
                      id="navbardrop"
                      data-toggle="dropdown"
                    >
                      New Arrivals
                      <i className="fa fa-chevron-right icon-right"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu7 border-0 rounded-0 p-0">
                      <ul className="p-0 py-3 m-0 border-0 bg-white h-100">
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="dropdown-item p-0 dropdown dropright">
                    <Link
                      to="/"
                      className="px-3 d-flex justify-content-between align-items-center"
                      id="navbardrop"
                      data-toggle="dropdown"
                    >
                      TV & Audio
                      <i className="fa fa-chevron-right icon-right"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu8 border-0 rounded-0 p-0">
                      <ul className="p-0 py-3 m-0 border-0 bg-white h-100">
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Top 100 Offers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            New Arrivals
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TV & Audio
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="carousel-item item1 active">
              <img src="/images/slider1.jpg" alt="" srcset="" />
            </div>
            {/* <div className="carousel-item item2"></div> */}
            {/* <div className="carousel-item item3"></div> */}
          </div>
          {/* <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="sr-only">Next</span>
          </a> */}
        </div>
      </div>
    );
  }
}
