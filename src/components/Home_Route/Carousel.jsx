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
            <div className="sidebar container-fluid m-auto d-none d-sm-block">
              <div className="row p-0 w-100 m-0">
                <ul className="col-5 col-md-4 col-lg-3 col-xl-3 p-0 py-3 m-0 bg-white w-100 h-100">
                  <li className="dropdown-item p-0 dropdown dropright">
                    <Link
                      to="/"
                      className="px-3 d-flex justify-content-between align-items-center"
                      id="navbardrop"
                      data-toggle="dropdown"
                    >
                      Mobile Accessories
                      <i className="fa fa-chevron-right icon-right"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu border-0 rounded-0 p-0">
                      <ul className="p-0 py-3 m-0 border-0 bg-white h-100">
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Chargers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Cables
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Protectors & Cases
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Handfree
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            EarPods
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
                            PubG Triggers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Tripods
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            TikTok Ring Light
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Selfie Stick
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
                      Gaming Controllers
                      <i className="fa fa-chevron-right icon-right"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu2 rounded-0 p-0 py-3">
                      <li className="dropdown-item p-0">
                        <Link
                          to="/"
                          className="px-3 d-flex justify-content-between align-items-center"
                        >
                          PS2 Controllers
                        </Link>
                      </li>
                      <li className="dropdown-item p-0">
                        <Link
                          to="/"
                          className="px-3 d-flex justify-content-between align-items-center"
                        >
                          PS3 Controllers
                        </Link>
                      </li>
                      <li className="dropdown-item p-0">
                        <Link
                          to="/"
                          className="px-3 d-flex justify-content-between align-items-center"
                        >
                          PS4 Controllers
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
                      <li className="dropdown-item p-0">
                        <Link
                          to="/"
                          className="px-3 d-flex justify-content-between align-items-center"
                        >
                          JoyStick
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
                      Laptop & Computers Accessories
                      <i className="fa fa-chevron-right icon-right"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu3 rounded-0 p-0 py-3">
                      <li className="dropdown-item p-0">
                        <Link
                          to="/"
                          className="px-3 d-flex justify-content-between align-items-center"
                        >
                          Laptops Chargers
                        </Link>
                      </li>
                      <li className="dropdown-item p-0">
                        <Link
                          to="/"
                          className="px-3 d-flex justify-content-between align-items-center"
                        >
                          RAM
                        </Link>
                      </li>
                      <li className="dropdown-item p-0">
                        <Link
                          to="/"
                          className="px-3 d-flex justify-content-between align-items-center"
                        >
                          Hard Disk
                        </Link>
                      </li>
                      <li className="dropdown-item p-0">
                        <Link
                          to="/"
                          className="px-3 d-flex justify-content-between align-items-center"
                        >
                          Keyboard
                        </Link>
                      </li>
                      <li className="dropdown-item p-0">
                        <Link
                          to="/"
                          className="px-3 d-flex justify-content-between align-items-center"
                        >
                          Mouse
                        </Link>
                      </li>
                      <li className="dropdown-item p-0">
                        <Link
                          to="/"
                          className="px-3 d-flex justify-content-between align-items-center"
                        >
                          Wireless Keyboard
                        </Link>
                      </li>
                      <li className="dropdown-item p-0">
                        <Link
                          to="/"
                          className="px-3 d-flex justify-content-between align-items-center"
                        >
                          Wireless Mouse
                        </Link>
                      </li>
                      <li className="dropdown-item p-0">
                        <Link
                          to="/"
                          className="px-3 d-flex justify-content-between align-items-center"
                        >
                          Power Cables
                        </Link>
                      </li>
                      <li className="dropdown-item p-0">
                        <Link
                          to="/"
                          className="px-3 d-flex justify-content-between align-items-center"
                        >
                          VGA Cables
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
                      Memory Storage
                      <i className="fa fa-chevron-right icon-right"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu4 border-0 rounded-0 p-0">
                      <ul className="p-0 py-3 m-0 border-0 bg-white h-100">
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            USB
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Memory Cards
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            OTG
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Card Reader
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
                      Batteries & PowerBanks
                      <i className="fa fa-chevron-right icon-right"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu5 border-0 rounded-0 p-0">
                      <ul className="p-0 py-3 m-0 border-0 bg-white h-100">
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Mobiles Batteries
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Laptop Batteries
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            PowerBanks
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
                      Audios & Video
                      <i className="fa fa-chevron-right icon-right"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu6 border-0 rounded-0 p-0">
                      <ul className="p-0 py-3 m-0 border-0 bg-white h-100">
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            HeadPhones
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Wireless HeadPhones
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            MicroPhones
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Handfree
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Wireless Handfree
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            AUX Cables
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Speakers
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Wireless Speakers
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
                      Car Accessories
                      <i className="fa fa-chevron-right icon-right"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu7 border-0 rounded-0 p-0">
                      <ul className="p-0 py-3 m-0 border-0 bg-white h-100">
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Mobile Holder
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Car Chargers
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
                      Mobiles Attachments
                      <i className="fa fa-chevron-right icon-right"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu8 border-0 rounded-0 p-0">
                      <ul className="p-0 py-3 m-0 border-0 bg-white h-100">
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            USB Portable Fan
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            USB Portable Light
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Telescopic Lens
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            Fish Eye Lens
                          </Link>
                        </li>
                        <li className="dropdown-item p-0">
                          <Link
                            to="/"
                            className="px-3 d-flex justify-content-between align-items-center"
                          >
                            LED Flash Light
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="carousel-item item1 active">
              <img src="/images/slider1.jpg" alt="" />
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
